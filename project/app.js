var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/about", (req, res)=>{
    res.render("about");
})
// localhost:3000/contact
app.get("/contact", (req, res)=>{
    res.render("contact");
})
app.get("/login", (req, res)=>{
    res.render("login");
})


var port = 3000;
app.listen(port, ()=>{

})