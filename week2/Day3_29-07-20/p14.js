/* Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
 */

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
 
function isEven(num){
     if(num%2==0)
      console.log(true);
    
      else 
      console.log(false);
}

isEven(arr);

});