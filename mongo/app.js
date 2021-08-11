var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";


app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded()); // Express v3
app.use(bodyParser.urlencoded({ extended : true })); // Express v4
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("form");
})
app.post("/add", (req, res)=>{
    //console.log(req.body);
    var obj = req.body;
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7"); // use tss7
        db.collection("demo").insertOne(obj, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/");
        });
    });
});

/*
    res.send()            ---- data

    res.sendFile()          --- file send

    res.render()            --- file + data

    res.redirect()    ---- redirect to another route/url

*/

app.listen(3000, ()=>{
    console.log("server running");
})