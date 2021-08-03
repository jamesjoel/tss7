var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/help", require("../controllers/help"));

module.exports = routes;

// localhost:3000/contact/more/demo

// localhost:3000/help/online





