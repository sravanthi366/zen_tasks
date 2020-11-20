// Fill in your code that takes an number minutes and converts it to seconds.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
  
});

inp.on("close", () => {
 var min=userInput[0].split(" ");
 let min1 = +min;
function toSeconds(min) {
    return min*60;
}
var secs = toSeconds(min1);
console.log(secs);
});