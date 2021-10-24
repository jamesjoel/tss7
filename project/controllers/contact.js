var express = require("express");
var route = express.Router();

//localhost:3000/contact    /more    /need
//localhost:3000/contact/

route.get("/", (req, res)=>{
    var pagedata = { name : "rohit"};
    res.render("contact", pagedata);

    var x = "rohit";
    res.render("contact", { name : x });
})


module.exports = route;