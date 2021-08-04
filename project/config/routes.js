var express = require("express");
var route = express.Router();

route.use("/", require("../controllers/home"));
route.use("/about", require("../controllers/about"));
route.use("/contact", require("../controllers/contact"));
route.use("/login", require("../controllers/login"));

module.exports = route;