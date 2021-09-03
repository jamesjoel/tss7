var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(routes);


app.listen(3000, ()=>{
    console.log("server running");
})