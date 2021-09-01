var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var upload = require("express-fileupload");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(upload());

app.get("/", (req, res)=>{
    res.render('home');
});

app.post("/", (req, res)=>{
    console.log(req.body);
    // console.log(req.files);
    var image = req.files.photo;
    var name = image.name;
    // var size = image.size;
    image.mv(__dirname+"/uploaded_image/"+name, (err)=>{
        //console.log("------------------------");
        res.redirect("/");
    });
})


app.listen(3000);

/*
{
  photo: {
    name: '001_14_18.jpg',
    data: <Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 01 00 60 00 60 00 00 ff fe 00 3b 43 52 45 41 54 4f 52 3a 20 67 64 2d 6a 70 65 67 20 76 31 2e 30 20 28 75 73 69 ... 85958 more bytes>,
    size: 86008,
    encoding: '7bit',
    tempFilePath: '',
    truncated: false,
    mimetype: 'image/jpeg',
    md5: '4b4df1d42bd700190471a2bcc2dd3a9f',
    mv: [Function: mv]
  }
}
*/