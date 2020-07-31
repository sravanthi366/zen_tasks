const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));
//const result = data.filter(data.region => data.region=='Asia');

/* var res= data['country'].forEach(function(element){
    console.log( element.region);
 }) */

 var res= data['country'].filter(function(element){
    return element.region=="Asia";
 })
 console.log(res) 

 
