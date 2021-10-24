var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var sha1=require("sha1");


routes.get("/", (req, res)=>{
    // js ------ > ejs
    res.render("login", { a : req.flash("xyz") });
});

routes.post("/auth", (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ username : u}).toArray((err, result)=>{
            if(result.length==1) // that means username is correct
            {
                var pass = result[0].password;
                if(pass == sha1(p)) // that means password also correct
                {

                    req.session.full_name = result[0].full_name;
                    req.session._id = result[0]._id;
                    req.session.isLoggedIn = true;

                    res.redirect("/profile");
                }
                else
                {
                    req.flash("xyz", "This Password is Incorrect !");
                    res.redirect("/login");
                }

            }
            else // that means username is incorrect
            {
                // var a = "This Username and Password is Incorrect !";
                req.flash("xyz", "This Username and Password is Incorrect !");
                res.redirect("/login");
            }
        })
    })


    
})

module.exports = routes;

/*
    Signup ----  password -- 00 ---- 215458sdfg545sdf5g121dsfg5s4g

    Login ---- password -- 00 -- 215458sdfg545sdf5g121dsfg5s4g



*/
