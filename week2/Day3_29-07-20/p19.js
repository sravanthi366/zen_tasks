/* Create a function to calculate the distance between two points defined by their x, y coordinates */


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
let b = +arr[1];
let c= +arr[2];
let d =+ arr[3];
 
function diff (num1, num2) {
  if (num1 > num2) {
    return (num1 - num2);
  } else {
    return (num2 - num1);
  }
};

function dist (x1, y1, x2, y2) {
  var deltaX = diff(x1, y1);
  var deltaY = diff(x2, y2);
  var dist = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
  return (dist);
};

console.log(dist(a,b,c,d));

});