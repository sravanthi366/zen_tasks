const fs = require('fs');
let heroes=JSON.parse(fs.readFileSync('country.json'));

// By using arrow function
heroes['country'].forEach(element => {
    filter(element.region=='Asia')
        console.log(element)
});


