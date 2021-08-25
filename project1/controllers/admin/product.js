var express = require("express");
const { route } = require("./login");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var mongodb = require("mongodb");

// location:3000/admin/product/add
routes.get("/add", (req, res)=>{
    res.render("admin/add_product");
    // res.send("hello");
})


// location:3000/admin/product/list
routes.get("/list", (req, res)=>{
    
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db('tss7');
        db.collection("product").find().toArray((err, result)=>{

            // console.log(result);

            var pageData = { products : result };
            res.render("admin/list_product", pageData);
        });
    })

})




// location:3000/admin/product/add
routes.post("/add", (req, res)=>{
    //console.log(req.body);

    // the parseInt() fun in convert string to int
    req.body.price = parseInt(req.body.price);
    req.body.discount = parseInt(req.body.discount);

    MongoClient.connect(mongoUrl, (err, con)=>{
        var db  = con.db("tss7");
        db.collection("product").insertOne(req.body, (err)=>{
            res.redirect("/admin/dashboard");
        })
    })
})


routes.get("/delete/:x", (req, res)=>{
    //console.log(req.params);

    var _id = mongodb.ObjectId(req.params.x);

    // console.log("delete product --------------");
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("product").remove({_id : _id}, (err, result)=>{
            if(err){
                console.log(err);
            }
            res.redirect("/admin/product/list");
        })
    })
})

module.exports = routes;