var express = require("express");
var route = express.Router();

// localhost:3000/about   /
//localhost:3000/contact    /more    /need

route.use("/", require("../controllers/home"));

route.use("/about", require("../controllers/about"));

route.use("/contact", require("../controllers/contact"));

route.use("/login", require("../controllers/login"));

module.exports = route;