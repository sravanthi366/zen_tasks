async function get(slug) {
    let api = 'https://api.covid19api.com/country/' + slug + '/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
    try {
        let info = await fetch(api);
        let result = await info.json();
        alert(JSON.stringify(result))
    } catch (error) {

    }



}


(async() => {
    let response = await fetch('https://api.covid19api.com/summary');
    let user = await response.json();
    console.log(user)
    user.Countries.forEach(element => {
        let col4 = document.createElement('div');
        col4.classList.add('col-4')
        let card = document.createElement('div');
        card.classList.add('card', 'm-3');

        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");
        let h5 = document.createElement('h5');
        h5.classList.add("card-title");
        h5.innerHTML = element.Country;
        cardBody.append(h5);
        let ul = document.createElement('ul');
        ul.classList.add("card-text");

        let li1 = document.createElement('li');
        li1.classList.add("card-text");
        li1.innerHTML = 'CountryCode  : ' + element.CountryCode;
        ul.append(li1)
        let li2 = document.createElement('li');
        li2.classList.add("card-text");
        li2.innerHTML = 'Date  : ' + element.Date;
        ul.append(li2);
        let li3 = document.createElement('li');
        li3.classList.add("card-text");
        li3.innerHTML = 'Slug  : ' + element.Slug;
        ul.append(li3);
        let li4 = document.createElement('li');
        li4.classList.add("card-text");
        li4.innerHTML = 'TotalConfirmed  : ' + element.TotalConfirmed;
        ul.append(li4);
        let li5 = document.createElement('li');
        li5.classList.add("card-text");
        li5.innerHTML = 'Slug  : ' + element.Slug;
        ul.append(li5);
        let li6 = document.createElement('li');
        li6.classList.add("card-text");
        li6.innerHTML = 'TotalDeaths  : ' + element.TotalDeaths;
        ul.append(li6);
        let li7 = document.createElement('li');
        li7.classList.add("card-text");
        li7.innerHTML = 'TotalRecovered  : ' + element.TotalRecovered;
        ul.append(li7);
        cardBody.append(ul);
        let button = document.createElement('button')
        button.classList.add('card')
        button.innerText = 'Details'
        button.setAttribute('style', 'color:white;background-color:blue')
        button.setAttribute('onclick', 'get("' + element.Slug + '")')

        cardBody.append(button);
        card.append(cardBody);
        col4.append(card);
        row.append(col4);


    });



})();




let main = document.createElement('div');
main.classList.add('container');
let header = document.createElement('header');
header.classList.add('display-1');
header.id = 'title';
header.innerText = 'All Covid INFO';
main.append(header);
let row = document.createElement('div');
row.classList.add('row', 'bg-dark');

main.append(row);
document.body.append(main);