/* Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’. */



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
 
let arr1 =arr[0];
let items = arr1.split(",");

console.log(items);

 
function getLastElement(array){
    
    return array[array.length-1];
 
}


console.log(getLastElement(items));

});