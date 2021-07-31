var express = require("express");
var app = express();


app.use(express.static(__dirname+"/assets"));
// the app.use()function call auto, before any other 'routes' call

// localhost:3000/about

// the express.static()function call all static files for HTML page.


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})

app.listen(3000, ()=>{
    console.log("server running");
})

//EJS