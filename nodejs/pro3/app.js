var x = require("reverse-string");
var a = x('nikhil');
// console.log(a);
var d = require("dateformat");
var now = new Date();

// 27 July 2021
var newdate = d(now, "dddd, d mmmm yyyy");
console.log(newdate);
