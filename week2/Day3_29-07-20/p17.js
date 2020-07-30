/* Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word. */


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
userInput = [];
inp.on("line", (data) => {
    userInput.push(data);
  
});

inp.on("close", () => {
 let arr=userInput[0];
 
function getLengthOfWord(word1){
    
   return word1.length;
 
}

console.log(getLengthOfWord(arr));

});