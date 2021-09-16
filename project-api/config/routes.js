var express = require("express");
var routes = express.Router();

rotues.use("/api/product", require("../controllers/product"));
rotues.use("/api/category", require("../controllers/category"));

module.exports = routes;