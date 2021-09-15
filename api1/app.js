var express = require("express");
var app = express();
var routes = require("./config/routes");
var cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

app.listen(3000, ()=>{
    console.log("server running");
})