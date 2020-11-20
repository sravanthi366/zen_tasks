/* Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
 */

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
 let b=+arr[1];
 console.log(a,b)
 
function areBothOdd(num1, num2){
 if (num1%2==1&&num2%2==1)
 console.log("true");
 else
 console.log("false");
}

areBothOdd(a,b);

});