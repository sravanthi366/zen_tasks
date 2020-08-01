const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));

const filteredItems = data['country'].filter(element=>{
    return element.region=="Asia";
 })
 var asia=filteredItems.reduce((counted,filteredItems)=>{
   return counted+(filteredItems.population);
 },0);
 console.log(asia);