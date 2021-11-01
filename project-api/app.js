var express = require("express");
var app = express();
var routes = require("./config/routes");
var cors = require("cors");
var upload = require("express-fileupload");

app.use(cors());

app.use(express.static(__dirname+"/assets"));


app.use(express.json());
app.use(express.urlencoded());
app.use(upload());

app.use(routes);

app.listen(3000, ()=>{
    console.log("server running");
})