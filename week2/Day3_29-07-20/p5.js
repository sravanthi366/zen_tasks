//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
  
});

inp.on("close", () => {
 let myint=userInput[0].split(" ");
 let myint1 = +myint;
function nextNumber(myint) {
    return myint+1;
}
var myNextint = nextNumber(myint1);
console.log(myNextint);
});