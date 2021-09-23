var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var sha1 = require("sha1");

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

module.exports = routes;