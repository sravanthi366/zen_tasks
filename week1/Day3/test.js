const fs = require('fs');
var allCountry = JSON.parse(fs.readFileSync('C:\\Users\\admin\\Documents\\json\\db.json').toString());  // db.json =>  https://restcountries.eu/rest/v2/all => Countries : {allCountryInfo as Array}
allCountry['countries'].forEach((data,index) =>{
    data.id = index+1;
});
fs.writeFileSync('C:\\Users\\admin\\Documents\\json\\db.json', JSON.stringify(allCountry));