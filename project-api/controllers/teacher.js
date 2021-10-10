var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var mongodb = require("mongodb");

//localhost:3000/api/teacher

routes.get("/", (req, res)=>{
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.get("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").find({ _id : objid }).toArray((err, result)=>{
            res.send(result[0]);
        })
    })
})


routes.put("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    // console.log(req.body);
    delete req.body._id;
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").updateMany({ _id : objid }, { $set : req.body }, ()=>{
            res.send({ success : true });
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

routes.delete("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("teacher").deleteMany({ _id : objid }, ()=>{
            res.send({ success : true });
        })
    })
});


module.exports = routes;