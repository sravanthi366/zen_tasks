/* Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length. */



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
 
let a = arr[0];
let b = arr[1];
 
function isSameLength(word1, word2){
    if(word1.length==word2.length)
    return true;
 
}

console.log(isSameLength(a,b));

});