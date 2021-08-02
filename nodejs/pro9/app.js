var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    var a = "indore";
    var obj = { x : a, y : "rohit" };
    res.render("home", obj);
    // res.sendFile(__dirname+"/home.html")
})


app.get("/about", (req, res)=>{
    var name = "nidhi";
    var age = 25;
    var gender = "female";
    var obj = { name : name, age : age, gender : gender };
    res.render("about", obj);
})



app.listen(3000, ()=>{
    console.log("server running");
})
/*
    html  ----- ejs (view engine)  ---- show the varialbes

    npm init
    npm i express
    npm i ejs

    1. npm i ejs

    2. app.set("view engine", "ejs")

    3. create a folder "views"

    4. all .html file convert to .ejs file, and save it to "views" folder

    5. all values you want to print in ".ejs" file, so you have to crate
    a object with those values.
*/