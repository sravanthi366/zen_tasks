const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));

var res= data['country'].forEach(function(country){
       console.log(res);
    
})
