//Find the Perimeter of a Rectangle Create a function that takes height and width and finds the perimeter of a rectangle.

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
 
function findPerimeter(num1,num2) {
    return 2*(num1+num2);
}
let peri = findPerimeter(a,b);
console.log(peri);
});