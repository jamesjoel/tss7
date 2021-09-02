var express = require("express");
const { route } = require("./login");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var mongodb = require("mongodb");

// location:3000/admin/product/add
routes.get("/add", (req, res)=>{
    res.render("admin/add_category");
    // res.send("hello");
});

routes.get("/delete/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("category").deleteOne({ _id : id }, (err, result)=>{
            res.redirect("/admin/category/list");
        })
    })
})

routes.get("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("category").find({ _id : id }).toArray((err, result)=>{
            res.render("admin/edit_category", { result : result[0] });
        })
    })
})


routes.get("/list", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("category").find().toArray((err, result)=>{

            res.render("admin/list_category", { result : result });
        })
    })
    // res.send("hello");
})

// location:3000/admin/product/add
routes.post("/add", (req, res)=>{
    //console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db  = con.db("tss7");
        db.collection("category").insertOne(req.body, (err)=>{
            res.redirect("/admin/dashboard");
        })
    })
})


routes.post("/update/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("category").updateOne({ _id : id }, { $set : req.body }, (err, result)=>{
            res.redirect("/admin/category/list");
        });
    })
})

module.exports = routes;

/*
.updateMany({ _id : 5 }, { $set : { city : "indore"}, (err, result)})


.find()
.insert
.update
.deleteOne, .removeOne


*/