function gst_cal(amt) // amt, a, final_price
{
    var a = amt*18/100;

    var final_price = amt+a;

    return final_price;
}
// the 'return' keyword is used form come back to function.
// the 'return' keyword come back and take values aslo.
var ans = gst_cal(1000);
console.log(ans);




