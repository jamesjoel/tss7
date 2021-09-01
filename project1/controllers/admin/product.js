var express = require("express");
var route = require("./login");
var routes = express.Router();
var MongoClient = require("mongodb").MongoClient;
var mongoUrl = "mongodb://localhost:27017";
var mongodb = require("mongodb");

var path = require("path");

var random = require("random-string");





// location:3000/admin/product/add
routes.get("/add", (req, res)=>{
    res.render("admin/add_product");
    // res.send("hello");
})


// location:3000/admin/product/list
routes.get("/list", (req, res)=>{
    
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db('tss7');
        db.collection("product").find().toArray((err, result)=>{

            // console.log(result);

            var pageData = { products : result };
            res.render("admin/list_product", pageData);
        });
    })

})




// location:3000/admin/product/add
routes.post("/add", (req, res)=>{
    //console.log(req.body);

    // the parseInt() fun in convert string to int
    // console.log(req.files);
    var rand_str = random({ length : 40});
    
    var pro_image = req.files.image;
    var name = pro_image.name; // photo.1.hello.jpg  ---- sdfgerGDFGERDFGergdfg.jpg
    var size = pro_image.size;

    var arr = name.split("."); // ["photo", "1", "hello", "jpg"] 
    var ext = arr[arr.length-1];
    var new_name = rand_str+"."+ext;

    // E:/tss7/project1/contrllers/admin/assets/product_images
    
    // E:/tss7/project1/assets/product_images

    pro_image.mv(path.resolve()+"/assets/product_images/"+new_name, (err)=>{
        req.body.price = parseInt(req.body.price);
        req.body.discount = parseInt(req.body.discount);
        req.body.pro_image = new_name;
        MongoClient.connect(mongoUrl, (err, con)=>{
            var db  = con.db("tss7");
            db.collection("product").insertOne(req.body, (err)=>{
                res.redirect("/admin/product/list");
            })
        })
    });

    //return;
    
})


routes.get("/delete/:x", (req, res)=>{
    //console.log(req.params);

    var _id = mongodb.ObjectId(req.params.x);

    // console.log("delete product --------------");
    MongoClient.connect(mongoUrl, (err, con)=>{
        var db = con.db("tss7");
        db.collection("product").remove({_id : _id}, (err, result)=>{
            if(err){
                console.log(err);
            }
            res.redirect("/admin/product/list");
        })
    })
})

module.exports = routes;


/*

    var arr = ["rohit", "nilesh", "jaya", "aman", "nidhi", "pooja"];

    length = 6
    index = 5

*/