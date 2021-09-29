var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");
var mongo = require("mongodb");
/*
    { a : "Rohit"}, "Priyanka" -------- 254125511SDFGSDF



    "Priyanka", TOKEN --- { a : "Rohit" }


*/

// localhost:3000/api/user/add
routes.post("/add", (req, res)=>{
    req.body.pass = sha1(req.body.pass);

    delete req.body.re_pass;
    
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").insertOne(req.body, ()=>{
            res.json({ success : true });
        })
    })
})

routes.post("/auth", (req, res)=>{
    // console.log(req.body);
    var username = req.body.username;
    var password = sha1(req.body.password);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ email : username }).toArray((err, result)=>{
            if(result.length == 1)
            {
                if(password == result[0].pass)
                {
                    var token = jwt.sign({ userid : result[0]._id }, "the stepping stone");
                    // console.log(token);
                    res.status(200).json(token);
                }
                else{

                    res.status(401).json({ success : false, type : 2 });
                }
            }
            else{
                res.status(401).json({ success : false, type : 1 });
            }
        })
    })
})
// localhost:3000/api/user/profile
routes.get("/profile", (req, res)=>{
    //console.log(req.headers);
    var token = req.headers.token;
    // console.log(token);
    var obj = jwt.verify(token, "the stepping stone");
    // console.log(obj);
    
    var id = mongo.ObjectId(obj.userid);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db= con.db("tss7");
        db.collection("user").find({_id : id }).toArray((err, result)=>{
            console.log("-------------", result);
            res.send(result[0]);
        })
    })
})


module.exports = routes;