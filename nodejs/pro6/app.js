// call the express module
var express = require("express");

// call the express constructor
var app = express();

app.get("/", function(req, res){
    
    // console.log(__dirname);
    // res.sendFile("E:/tss7/nodejs/pro6/home.html");
    res.sendFile(__dirname+"/home.html");
    
});
app.get("/about", function(req, res){
    
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", function(req, res){
    
    res.sendFile(__dirname+"/contact.html");
});



// create a server with 3000
app.listen(3000, function(){ // callback
    console.log("server running");
});


/*
    res.send()  ------- Only Data Send

    res.sendFile() ---- Send HTML File


*/



