/* Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3 */

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
let items = arr1.split(",")
let b = +arr[1];


 
function getNthElement(array,n){
    
    return array[n];
 
}

console.log(getNthElement((items),b));

});