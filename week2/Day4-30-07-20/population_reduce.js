const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));

const total = data.country.reduce((res, {population}) => res + population, 0)

console.log(total)