//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
  
});

inp.on("close", () => {
 let arr=userInput[0].split(" ");
 let a= +arr[0];
 let b = +arr[1];
 
function lessThan100(num1,num2) {
    let sum = num1+num2;
    if(sum<100)
     return true;
     else
     return false;
}
let res = lessThan100(a,b);
console.log(res);
});