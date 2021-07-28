/*
app.js
index.js
server.js
*/
var express = require("express");
var app = express();

// create your 'routes' for web pages.

// localhost:3000/about
// localhost:3000/help
// localhost:3000/contact
// localhost:3000

app.get("/", function(req, res){
    // console.log(res);
    res.send("<h1>Home Page</h1>");
})

app.get("/about", function(req, res){
    res.send("<h1>About Page</h1>");
});
app.get("/help", function(req, res){
    res.send("<h1>Help Page</h1>")
})
app.get("/contact", function(req, res){ 
    res.send("<h1>This is About Page</h1>");
})
/*
when you create your 'route' by app.get() function,
the second parameter is 'callback function'
*/


app.listen(3000, function(){
    console.log("server running");
 })


// app.listen()
/*
function demo(a, b)
{
    var c = a + b;
    
}






demo(3000, function(){ });


*/