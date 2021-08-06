var express = require("express");
var route = express.Router();

// localhost:3000/about/

route.get("/", (req, res)=>{
    res.render("about");
})

module.exports = route;