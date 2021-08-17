var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret : "hello"}));
app.use(flash());


app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
