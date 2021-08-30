
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";

// MongoClient.connect(mongoUrl, (err, con)=>{ // connection stables to mongodb
//     var db = con.db("tss7"); // use tss7
//     db.collection("user")
// })

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.post("/", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("employee").insertOne(req.body, (err, result)=>{
            res.redirect("/");
        })
    })
})




app.get("/", (req, res)=>{
    var data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "aman",
            age : 23
        },
        {
            name : "nilesh",
            age : 20
        }
    ];
    var obj = { data : data };
    res.render("home", obj);
});

app.get("/about", (req, res)=>{
    res.render("about");
})



app.listen(3000, function(){ 
    console.log("server running");
})

/*
------------- insert
------------- remove
------------- find (le kar aana)
------------- update



db.collection("").insertOne(, (err, result)=>{

})

*/