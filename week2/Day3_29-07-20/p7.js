//Convert Hours into Seconds Write a function that converts hours into seconds.

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
 
 
function hourToSeconds(val) {
        return val*60*60;
}

arr.forEach(element => console.log(hourToSeconds(parseInt(element))));


});