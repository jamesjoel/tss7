var express = require("express");
var app = express();
var routes = require("./config/routes");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(routes);


// localhost:3000/help/online
// localhost:3000/contact/more/demo

app.listen(3000, ()=>{
    console.log("server running");
})