const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));
var res= data['country'].map(function(element){
    element.name=element.name.toUpperCase();
     return element;
 })
 console.log(res) 
