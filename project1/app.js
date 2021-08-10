var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
