const foo = ['one', 'two', 'three'];
const [red, yellow , green, orange='or'] = foo;   // last value is default
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three“
console.log(orange); // "three“

let a = 1, b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
