/* Fetching weather info using arrow function  */
/* (async(lat, lon) => {
    let weather = "https://api.openweathermap.org/data/2.5/onecall?lat=' + lat +'&lon='+ lon +'&exclude={part}&appid=efad96a2f1d4970916c3a7a0da9cda4d"
    try {
        let result = await fetch(weather)
        let data = await result.json()
        alert('Weather :  ' + JSON.stringify(data.current.weather));


    } catch (error) {

        console.log(Error)

    }
})(); */

async function info(lat, lon) {
    let weather_data = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude={part}&appid=efad96a2f1d4970916c3a7a0da9cda4d';
    try {

        let data = await fetch(weather_data);
        let data_result = await data.json();


        alert('Weather is:  ' + JSON.stringify(data_result.current.weather));
    } catch (error) {
        alert(error);
    }

}

/* Fetching data from rest countries using arrow function */
(async() => {
    try {
        let data = await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
        let res = await data.json();
        console.log(res);
        res.forEach(element => {
            let col4 = document.createElement('div');
            col4.classList.add('col', 'col-lg-4', 'col-sm-12')


            let card = document.createElement('div');
            card.classList.add('card', 'm-1');

            let text_center = document.createElement('div')
            text_center.classList.add('text-center')

            let head = document.createElement('div')
            head.classList.add('card-header', "bg-dark", 'text-white')
            let h5 = document.createElement('h5');
            h5.classList.add("card-title");
            h5.innerHTML = element.name;
            head.append(h5);

            let card_body = document.createElement('div');
            card_body.setAttribute('style', 'background:linear-gradient(to right, rgb(209,193,157), rgb(79,94,90))')
            card_body.classList.add("card-body", 'text-white');

            let img = document.createElement('img');
            img.classList.add("card-img-top", 'm-1', 'border');
            img.style.width = 10 + 'em';
            img.src = element.flag;
            card_body.append(img);

            let ul = document.createElement('ul');
            ul.classList.add("card-text", "list-unstyled");

            let li1 = document.createElement('li');
            li1.classList.add("card-text");
            li1.innerHTML = 'Capital  : ' + element.capital;
            ul.append(li1);

            let li2 = document.createElement('li');
            li2.classList.add("card-text");
            li2.innerHTML = 'Region  : ' + element.region;
            ul.append(li2);

            let li3 = document.createElement('li');
            li3.classList.add("card-text");
            li3.innerHTML = 'Countrycode  : ' + element.alpha3Code;
            ul.append(li3);

            let li4 = document.createElement('li');
            li4.classList.add("card-text");
            li4.innerHTML = 'latlng  : ' + element.latlng;
            ul.append(li4);

            let button = document.createElement('button')
            button.classList.add('btn', 'btn-primary')
            button.innerText = 'Click for Weather'
            button.setAttribute('onclick', 'info("' + element.latlng[0] + '","' + element.latlng[1] + '")')
            ul.append(button)


            row.append(col4);
            col4.append(card);
            card.append(text_center)
            text_center.append(head)
            text_center.append(card_body)
            card_body.append(ul)






        });


    } catch (error) {
        console.log(error)
    }



})();

/* Creating a container */

let main_container = document.createElement('div')
main_container.classList.add('container', 'm1-1')


/* Creating header */

let header = document.createElement('header')
header.classList.add('container', 'display-4')
header.setAttribute('style', 'color:blue')
header.innerText = 'Restcountries & Wheather using fetch API'
main_container.append(header)
    /* creating row */
let row = document.createElement('div')
row.classList.add('row')
row.setAttribute('style', 'background-color:rgb(35,64,75)')
main_container.append(row)
document.body.append(main_container)