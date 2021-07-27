// getting all information form 'express' module
var express = require("express");
var app = express();


app.listen(3000, function(){ 
    // virtual server create in http://localhost:3000 port
    console.log("server running");
})

/*
    var xyz = require("express");
    var hello = xyz();

*/