var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
// localhost:3000/api/teacher
routes.get("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

module.exports = routes;
/*
    res.render      ejs+data
    res.send        data
    res.sendFile    html
    res.redirect    
*/