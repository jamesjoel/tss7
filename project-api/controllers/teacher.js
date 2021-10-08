var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";

routes.get("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.post("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").insertOne(req.body, ()=>{
            res.send({ success : true });
        })
    })
})

module.exports = routes;