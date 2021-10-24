var express = require("express");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var sha1 = require("sha1");

routes.get("/", (req, res)=>{
    
    var a = req.session._id;
    // the _id is simple string so we have to convert into ObjectId

    var b = mongodb.ObjectId(a);

    // console.log(_id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ _id : b }).toArray((err, result)=>{
            
            res.render("profile", { result : result[0] });
        })
    })
});

routes.get("/edit", (req, res)=>{
    var _id = req.session._id; // 123
    // the _id is simple string so we have to convert into ObjectId

    _id = mongodb.ObjectId(_id); // ObjectId(123)

    // console.log(_id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ _id : _id }).toArray((err, result)=>{
            
            res.render("edit_profile", { result : result[0] });
        })
    })
})

routes.post("/update", (req, res)=>{
    // console.log(req.body);
    var _id = mongodb.ObjectId(req.session._id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").updateMany({_id : _id}, {$set : req.body}, (err, result)=>{
            res.redirect("/profile");
        })
    })
})


routes.get("/change_password", (req, res)=>{
    res.render("change_password", { msg : req.flash("msg")});
});
routes.post("/update_password", (req, res)=>{
    // console.log(req.body);
    var current_pass = req.body.current_pass;
    var new_pass = req.body.new_pass;
    var confirm_new_pass = req.body.confirm_new_pass;

    var _id = mongodb.ObjectId(req.session._id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss7");
        db.collection("user").find({ _id : _id }).toArray((err, result)=>{
            // console.log(result[0]);
            var user = result[0];
            if(user.password == sha1(current_pass))
            {
                if(new_pass == confirm_new_pass)
                {
                    db.collection("user").updateMany({_id : _id}, { $set : { password : sha1(new_pass)}}, (err, result)=>{
                        res.redirect("/logout");
                    })
                }
                else
                {
                    req.flash("msg", "New Password and Confirm New Password is Incorect !");
                    res.redirect("/profile/change_password");
                }
            }
            else
            {
                req.flash("msg", "Current Password is Incorect !");
                res.redirect("/profile/change_password");
            }
        })
    })
})

module.exports = routes;



/*
full_name
isLoggedIn
_id

db.collection("").findOne({ _id : 21548212454 }).






when any data insert into database then _id is created like 
this

"_id" : OjbectId(123)

req.session._id = 123






/profile
/myorder
/mycart
/changepassword
/whishlist
/edit_profile





{ _id : ObjectId(123) name : "rohit", age : 25 }

req.session._id = ObjectId(123)

req.session._id = 123

*/