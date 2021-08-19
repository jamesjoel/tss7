var express = require("express");
var app = express();

// middle-ware
// The middleware are functions which can run/ext middle of the another function.

app.use("/about", (req, res, next)=>{
    console.log("++++++++++++++++++++++++++++");
    next();
})

app.get('/', function(req, res){
    res.sendFile(__dirname+"/home.html");
})

app.get('/about', function(req, res){
    res.sendFile(__dirname+"/about.html");
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname+"/contact.html");
})


app.listen(3000, function(){
    console.log("server running");
})

/*
    app.use(function(req, res){
        console.log("hello");
    })



    app.get()
    app.post()


*/