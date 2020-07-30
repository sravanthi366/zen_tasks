/* Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
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
 let arr=userInput[0].split(",");
 let a= arr[0];
 let b= arr[1];

 
function getFullName(firstName, lastName){
  return firstName+" "+lastName;
}

console.log(getFullName(a,b));

});