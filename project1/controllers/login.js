var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    res.render("login");
})

module.exports = routes;
