var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var path = require("path");

routes.post("/", (req, res)=>{
    // console.log(req.files);
    var filepath = path.resolve()+"/assets/uploades/"+req.files.image.name;
    req.files.image.mv(filepath, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send({ success : true, filepath : "http://localhost:3000/uploades/"+req.files.image.name });
    });
})

module.exports = routes;