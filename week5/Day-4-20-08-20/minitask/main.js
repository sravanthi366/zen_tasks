async function info() {
    let random = 'https://random-word-api.herokuapp.com/word?number=1';


    let text = await fetch(random);
    let data_result = await text.json();

    console.log(data_result)

    let data = 'https://api.giphy.com/v1/gifs/search?api_key=ZeTBiiq2sAutYHV3sqzN9zJPy1NEtQ5y&q=smiley&limit=5&offset=0&rating=g&lang=en';


    let text1 = await fetch(data);
    let data_res = await text1.json();
    let result_data = data_res.data

    console.log(data_res)

    let div = document.createElement('div')
    div.setAttribute('style', 'margin-left:50px;margin-top:80px');
    div.setAttribute('class', "card-group");
    let img = document.createElement('img');
    document.body.append(div)
    div.append(img);
    if (data_res.length !== 0) {
        img.text1 = '${result_data[0].images.original.url}'

    }
    //console.log(result_data[0].images.original.url)



    /* let search = document.createElement('input')
    search.setAttribute('type', text)
    let button = document.createElement('button')
    button.innertext = "Giphy" */














}

info()