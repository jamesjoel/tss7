var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/login", require("../controllers/login"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/signup", require("../controllers/signup"));
// localhost:3000/admin

routes.use("/admin", require("./admin_route"));


// these routes/url protacted by Login Auth
routes.use("/profile", require("../controllers/profile"));



module.exports = routes;