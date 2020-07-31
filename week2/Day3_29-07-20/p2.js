//Write a function called “getOpposite”.
//Given a number, return its opposite

var num =5;

function getOpposite(num) {
    
if (typeof(num)=="number")
    return num*(-1);
   else
    return -1;
}


var result = getOpposite(num);
console.log(result);