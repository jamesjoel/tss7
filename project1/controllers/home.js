var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("product").find().toArray((err, result)=>{

            res.render("home", { result : result });
        })
    })
})

module.exports = routes;