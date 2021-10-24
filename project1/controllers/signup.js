var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
// npm i mongodb 
var MongoClient = require("mongodb").MongoClient;

routes.get("/", (req, res)=>{
    res.render("signup");
});
/*
    {
        full_name : "rohit",
        email : "rohit@gmail.com",
        password : 21sdfg54sd5fg1sd2fg15sd4g
        city : "indore"

    }


*/


routes.post("/save", (req, res)=>{

    req.body.password = sha1(req.body.password);
    // req.body.password = "123";

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











    tss6 ---------> student   ------- >




*/