var express = require("express");
var route = express.Router();

route.get("/", (req, res)=>{
    res.render("login");
})

module.exports = route;