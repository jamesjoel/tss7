var express = require("express");
const { route } = require("../controllers/home");
var routes = express.Router();

var auth_arr = ["/profile", "/myaccount", "/myorder"];
routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/login", require("../controllers/login"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/signup", require("../controllers/signup"));
// localhost:3000/admin

routes.use("/admin", require("./admin_route"));


routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
})

routes.use(auth_arr, function(req, res, next){
    if(! req.session.isLoggedIn){
            res.redirect("/login");
            return;
        }
    next();
});

// these routes/url protacted by Login Auth
routes.use("/profile", require("../controllers/profile"));



module.exports = routes;