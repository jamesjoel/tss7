var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("help page");
})

routes.get("/online", (req, res)=>{
    res.send("help ---- online page")
})


// localhost:3000/help/online
module.exports = routes;