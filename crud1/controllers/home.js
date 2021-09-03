var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})

module.exports = routes;