var express = require("express");
var routes = express.Router();
// localhost:3000/api/product
routes.use("/api/product", require("../controllers/product"));
routes.use("/api/category", require("../controllers/category"));
routes.use("/api/user", require("../controllers/user"));

module.exports = routes;