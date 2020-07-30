//Create a function that takes a string and returns it as an integer.


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
  
});

inp.on("close", () => {
 let mystr=userInput[0].split(" ");
 function toInteger(mystr) {
    
    return parseInt(mystr);
    
}
let myint = toInteger(mystr);
console.log(myint);
});