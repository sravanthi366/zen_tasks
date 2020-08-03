let a1, b1, r;
[a1, b1] = [10, 20];
console.log(a1);      // expected output: 10
console.log(b1);      // expected output: 20
[a1, b1, ...r] = [10, 20, 30, 40, 50];
console.log(r);        // expected output: Array [30,40,50]

({ a1, b1 } = { a1: 10, b1: 20 });
console.log(a1); // 10
console.log(b1); // 20

({a, b, ...x} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(x); // {c: 30, d: 40}

