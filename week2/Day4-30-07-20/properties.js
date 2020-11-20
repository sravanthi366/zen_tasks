const fs = require('fs');
let data=JSON.parse(fs.readFileSync('country.json'));

const filteredItems = data['country'].filter(element=>{
       return element.region=="Asia";
    })
    //console.log(filteredItems)
    filteredItems.forEach(element => {    
       console.log(element.name);
       console.log(element.capital);
       console.log(element.flag);
       console.log("**************************************")
    });
    console.log(res);
