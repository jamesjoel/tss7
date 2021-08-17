var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";


routes.get("/", (req, res)=>{
    res.render("login");
});

routes.post("/auth", (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ username : u}).toArray((err, result)=>{
            console.log(result);
        })
    })


    
})

module.exports = routes;
