var express = require('express');
var app = express();
var route = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
// localhost:3000/about/
//localhost:3000/contact/more/need

app.use(route);

var port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})