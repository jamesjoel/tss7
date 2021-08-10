var express = require("express");
var routes = express.Router();
// npm i mongodb 
var MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    res.render("signup");
});

routes.post("/save", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").insertOne(req.body, (err, result)=>{
            res.redirect("/");
            // INSERT INTO
        })
    })
})

module.exports = routes;

/*
    Node ----------------------> DataBase Connection(MongoDB)

    Node ----------------------> DataBase Connection(MySQL)

*/