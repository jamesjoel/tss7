var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("home");
})

app.post("/save", (req, res)=>{
    console.log(req.body);
})


app.listen(3000);