//Reverse a string

var s = "JavaScript";
console.log(s);
function reverseString(s)
   
{
   return s.split("").reverse().join("");
}
console.log(reverseString(s))