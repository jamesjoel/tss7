var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("contact page");
})

routes.get("/more", (req, res)=>{
    res.send("contact--- more page")
})

routes.get("/more/demo", (req, res)=>{
    res.send("contact---- more----demo")
});


// localhost:3000/contact/more/demo
module.exports = routes;