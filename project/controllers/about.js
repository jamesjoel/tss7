var express = require("express");
var route = express.Router();

route.get("/", (req, res)=>{
    res.render("about");
})

module.exports = route;