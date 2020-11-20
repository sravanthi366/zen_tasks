const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);

});

inp.on("close", () => {

    let str = userInput[0].split(" ");


    reverseWord(str);



});


function reverseWord(s) {

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);


    }
    let len = stack.length;

    while (len)
        stack.pop();


}