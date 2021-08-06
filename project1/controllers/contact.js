var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("contact");
})

module.exports = routes;