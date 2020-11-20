const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));
var res= data['country'].map(function(currentValue){
    currentValue.population= +currentValue.population+100000;
     return currentValue;
 })
 console.log(res) 
