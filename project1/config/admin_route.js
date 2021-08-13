var express = require("express");
var routes = express.Router();

// localhost:3000/admin   /
routes.use("/", require("../controllers/admin/login"));
// localhost:3000/admin   /dashboard
routes.use("/dashboard", require("../controllers/admin/dashboard"));
routes.use("/product", require("../controllers/admin/product"));
routes.use("/category", require("../controllers/admin/category"));


module.exports = routes;