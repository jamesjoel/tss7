var express = require("express");
const { route } = require("./login");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";

// location:3000/admin/product/add
routes.get("/add", (req, res)=>{
    res.render("admin/add_product");
    // res.send("hello");
})

// location:3000/admin/product/add
routes.post("/add", (req, res)=>{
    //console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db  = con.db("tss7");
        db.collection("product").insertOne(req.body, (err)=>{
            res.redirect("/admin/dashboard");
        })
    })
})


module.exports = routes;