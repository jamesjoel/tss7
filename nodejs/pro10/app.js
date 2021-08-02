var express = require("express");
var app = express();

app.set("view engine", "ejs");
// this code is tell to node, which template engine we are using.

app.use(express.static(__dirname+"/assets"));


app.get("/", (req, res)=>{
    var a = "rohit";

    var pageData = { name : a, city : "indore" };

    res.render("home", pageData);
})


app.listen(3000, ()=>{
    console.log("Server Running");
})

/*
    1. npm i ejs

    2. create a folder "views"

    3. convert/create html files with ".ejs" exten.






    res.send()          ---- Only Send Data

    res.sendFile()      ---- Send .html Files

    res.render()        ---- Send ejs file with data
*/