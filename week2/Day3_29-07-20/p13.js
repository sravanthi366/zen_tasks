/* Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise. */



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
 let a = +arr[0];

 
 
function divisibleByFive(num1) {
    
    if (num1%5==0)
    return true;
    else
    return false;
}
var divisible = divisibleByFive(a);
console.log(divisible);
});