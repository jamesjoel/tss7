var express = require("express");
var app = express();
var routes = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
