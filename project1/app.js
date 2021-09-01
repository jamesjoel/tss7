var express = require("express");
var app = express();
var routes = require("./config/routes");

// res.sendFile(__dirname+"/home.html");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cachec= require("nocache");
var upload = require("express-fileupload");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret : "hello"}));
app.use(flash());
app.use(cachec());
app.use(upload());

app.use(function(req, res, next){
    res.locals.logo = "The Stepping Stone";
    res.locals.usersession = req.session;
    /*
       .fullname
       ._id
       .isLoggedIn
    */
    next();
});


app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
/*
var obj = { firstname : "james", lastname : "joel" };
obj.a = "rohit";
obj.b = "amar";

var x = obj;


*/