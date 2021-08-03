var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("about page");
})

// localhost:3000/about/hello

routes.get("/hello", (req, res)=>{
    res.send("about----hello page");
})

module.exports = routes;