var express = require("express");
var route = express.Router();

//localhost:3000/contact    /more    /need
//localhost:3000/contact/

route.get("/", (req, res)=>{
    res.render("contact");
})


module.exports = route;