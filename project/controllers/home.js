var express = require("express");
var route = express.Router();

route.get("/", (req, res)=>{
    res.render("home");
})

module.exports = route;