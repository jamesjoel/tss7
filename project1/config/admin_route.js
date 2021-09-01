var express = require("express");
const { route } = require("../controllers/admin/login");
var routes = express.Router();

// localhost:3000/admin   /
routes.use("/", require("../controllers/admin/login"));
// localhost:3000/admin   /dashboard
var arr = ["/dashboard", "/category"];
routes.use(arr, (req, res, next)=>{
    if(! req.session.isAdminLoggedIn){
        res.redirect("/admin");
        return;
    }
    next();
})


routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/");
})

routes.use("/dashboard", require("../controllers/admin/dashboard"));
routes.use("/product", require("../controllers/admin/product"));
routes.use("/category", require("../controllers/admin/category"));


module.exports = routes;