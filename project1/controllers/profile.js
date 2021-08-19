var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    // if(! req.session.isLoggedIn){
    //     res.redirect("/login");
    //     return;
    // }
    res.render("profile");
});

module.exports = routes;



/*
/profile
/myorder
/mycart
/changepassword
/whishlist
/edit_profile


*/