var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var session = require('express-session');

app.use(cookieParser());
app.use(session({ secret : "indore"}));

// :3000/about ------ 12:00 (chrome)
app.get("/about", (req, res)=>{
    req.session.a = "Asad";
    res.send("about page");
})
// :3000/contact ---- 12:10 (opera)
app.get("/contact", (req, res)=>{
    console.log(req.session.a);
    res.send("contact page");
});
// :3000/demo ----- 12:30
app.get("/demo", (req, res)=>{
    console.log(req.session.a);
    res.send("demo page");
});





app.listen(3000);
/*
    1. npm i express-session cookie-parser

    var cookirParser = requ
    var session = express-se

    app.use(cooki())
    app.use(session({ secret : ""}))


    req.session.name = "ruhi";
    req.session.age = 25;
    req.session.lastname = "khan";


    req.session.name

*/