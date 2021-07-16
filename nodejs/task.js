var a = 80;
var b = 11;
var c = 30;

// find greater number without logical state, without elseif
// if()....else

if(a > b) // yadi "a", "b" se bada hai
{
    if(a > c) // yadi "a", "c" se bada hai
    {
        console.log("A is greater");
    }
    else // yadi "c", "a" se bada hai
    {
        console.log("C is greater");
    }
}
else // yadi "b", "a" se bada hai
{
    if(b > c) // "b", "c" se bada hai
    {
        console.log("B is greater");
    }
    else // "c", "b" se bada hai
    {
        console.log("C is greater");
    }
}


/*
wold largest population city

A. Indore           B. Ujjain

C. Shanghai         D. Mhow

*/