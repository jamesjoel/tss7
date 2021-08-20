var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var sha1 = require("sha1");

routes.get("/", (req, res)=>{
    res.render("admin/login", { msg : req.flash("msg")});
    
});
routes.post("/auth", (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("admin").find({ username : u}).toArray((err, result)=>{
            if(result.length == 1)
            {
                var pass = result[0].password;
                if(pass == sha1(p))
                {
                    req.session._admin_id = result[0]._id;
                    req.session.isAdminLoggedIn = true;
                    res.redirect("/admin/dashboard");
                }
                else
                {
                    req.flash("msg", "This Password is Incorrect !");
                    res.redirect("/admin");
                }
            }
            else
            {
                req.flash("msg", "This Username and Password is Incorrect !");
                res.redirect("/admin");
            }
        })
    })
})

module.exports = routes;