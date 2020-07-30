//Create a function that takes an array and returns the first element.

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
 
function getFirstElement(arr) {
    return arr[0];
}
let data = getFirstElement(arr)
console.log(data);
});