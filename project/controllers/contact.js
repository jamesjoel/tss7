var express = require("express");
var route = express.Router();

route.get("/", (req, res)=>{
    res.render("contact");
})

module.exports = route;