var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    
    var _id = req.session._id;
    // the _id is simple string so we have to convert into ObjectId

    _id = mongodb.ObjectId(_id);

    // console.log(_id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ _id : _id }).toArray((err, result)=>{
            
            res.render("profile", { result : result[0] });
        })
    })
});

routes.get("/edit", (req, res)=>{
    var _id = req.session._id; // 123
    // the _id is simple string so we have to convert into ObjectId

    _id = mongodb.ObjectId(_id); // ObjectId(123)

    // console.log(_id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ _id : _id }).toArray((err, result)=>{
            
            res.render("edit_profile", { result : result[0] });
        })
    })
})



module.exports = routes;



/*
full_name
isLoggedIn
_id

db.collection("").findOne({ _id : 21548212454 }).






when any data insert into database then _id is created like 
this

"_id" : OjbectId(123)

req.session._id = 123






/profile
/myorder
/mycart
/changepassword
/whishlist
/edit_profile





{ _id : ObjectId(123) name : "rohit", age : 25 }

req.session._id = ObjectId(123)

req.session._id = 123

*/