const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));
var res= data['country'].filter(function(element){
    return element.population<200000;
 })
 console.log(res) 