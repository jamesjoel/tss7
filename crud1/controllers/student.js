var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("student").find().toArray((err, result)=>{
            res.render("student_list", { result : result });
        })
    })
})
routes.get("/add", (req, res)=>{
    res.render("student_add");
})

routes.get("/delete/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("student").deleteOne({ _id : id }, (err)=>{
            res.redirect("/student")
        })
    })
})

routes.get("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("student").find({ _id : id }).toArray((err, result)=>{
            res.render("student_edit", { result : result[0] });
        })
    })
})




routes.post("/add", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("student").insertOne(req.body, (err)=>{
            res.redirect("/student")
        })
    })
})

routes.post("/edit/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("student").updateOne({_id : id }, { $set : req.body }, (err)=>{
            res.redirect("/student");
        })
    })
})



module.exports = routes;