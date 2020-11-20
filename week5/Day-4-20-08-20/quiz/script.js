(async() => {

    let questions = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    let data = await questions.json();
    console.log(data)

})();