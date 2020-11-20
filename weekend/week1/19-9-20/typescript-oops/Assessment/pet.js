var Availability = /** @class */ (function () {
    function Availability() {
        this.availability = [[
                {
                    animalCategory: "Cat",
                    name: "lilly",
                    gender: "Female",
                    age: 10,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Cat",
                    name: "rose",
                    gender: "Female",
                    age: 8,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Cat",
                    name: "lipsy",
                    gender: "Female",
                    age: 11,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Cat",
                    name: "bunny",
                    gender: "Male",
                    age: 3,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Cat",
                    name: "chinnu",
                    gender: "Male",
                    age: 6,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                }
            ],
            [
                {
                    animalCategory: "Camel",
                    name: "chinnu",
                    gender: "Male",
                    age: 6,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Camel",
                    name: "lilly",
                    gender: "Female",
                    age: 10,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Camel",
                    name: "rose",
                    gender: "Female",
                    age: 8,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Cat",
                    name: "lipsy",
                    gender: "Female",
                    age: 11,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                }
            ],
            [
                {
                    animalCategory: "Dog",
                    name: "lipsy",
                    gender: "Female",
                    age: 11,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                { animalCategory: "Dog",
                    name: "bunny",
                    gender: "Male",
                    age: 3,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good" }
            ],
            [
                {
                    animalCategory: "Goat",
                    name: "lipsy",
                    gender: "Female",
                    age: 9,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Goat",
                    name: "milky",
                    gender: "Female",
                    age: 5,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Goat",
                    name: "raju",
                    gender: "Male",
                    age: 7,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Goat",
                    name: "Monu",
                    gender: "Male",
                    age: 4,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                },
                {
                    animalCategory: "Goat",
                    name: "rasi",
                    gender: "Female",
                    age: 6,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                }
            ],
            [
                {
                    animalCategory: "Horse",
                    name: "laaalu",
                    gender: "Female",
                    age: 13,
                    vaccinationStatus: "All vactinations are done",
                    healthCondition: "Good"
                }
            ]
        ];
    }
    return Availability;
}());
/* Class for Enquery */
var Enquiry = /** @class */ (function () {
    function Enquiry() {
        this.display = [];
    }
    Enquiry.prototype.request = function (obj) {
        this.display.push(obj);
    };
    return Enquiry;
}());
/* object creation */
var enquery = new Enquiry();
var petList = new Availability();
console.log(petList);
var objCopy;
/* Form Validations */
var submitForm = function () {
    event.preventDefault();
    document.getElementById('details').style.visibility = 'hidden';
    var object = new Object();
    object['name'] = "" + document.getElementById('FullName').value;
    object['telephone'] = "" + document.getElementById('phoneNo').value;
    if (document.getElementById('yes').checked === true) {
        object['adoptStatus'] = "" + document.getElementById('yes').value;
    }
    else {
        object['adoptStatus'] = "" + document.getElementById('No').value;
    }
    object['animalCategory'] = "" + document.getElementById('category').value;
    enquery.display.push(object);
    console.log(object);
    if (object['animalCategory'] === 'Cat') {
        var status_1 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_1.innerHTML = "Your Query has \"" + petList.availability[0].length + "\" Matches";
        document.getElementById('availability').appendChild(status_1);
    }
    else if (object['animalCategory'] === 'Camel') {
        var status_2 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_2.innerHTML = "Your Query has \"" + petList.availability[1].length + "\" Matches";
        document.getElementById('availability').appendChild(status_2);
    }
    else if (object['animalCategory'] === 'Dog') {
        var status_3 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_3.innerHTML = "Your Query has \"" + petList.availability[2].length + "\" Matches";
        document.getElementById('availability').appendChild(status_3);
    }
    else if (object['animalCategory'] === 'Goat') {
        var status_4 = document.getElementById('status');
        (document.getElementById('status')).innerHTML = "";
        document.getElementById('availability').style.visibility = 'visible';
        status_4.innerHTML = "Your Query has \"" + petList.availability[3].length + "\" Matches";
        document.getElementById('availability').appendChild(status_4);
    }
    else if (object['animalCategory'] === 'Horses') {
        var status_5 = document.getElementById('status');
        (document.getElementById('status')).innerHTML = "";
        document.getElementById('availability').style.visibility = 'visible';
        status_5.innerHTML = "Your Query has \"" + petList.availability[4].length + "\" Matches";
        document.getElementById('availability').appendChild(status_5);
        /* document.getElementById('availability').appendChild(status); */
    }
    objCopy = new Object(object);
    console.log(petList.availability[0].length, object['animalCategory']);
    var resetForm = document.getElementById('form');
    resetForm.reset();
};
var showDetails = function () {
    var arrindex;
    document.getElementById('availability').style.visibility = 'hidden';
    if (objCopy['animalCategory'] === 'Cat') {
        arrindex = 0;
    }
    else if (objCopy['animalCategory'] === 'Camel') {
        arrindex = 1;
    }
    if (objCopy['animalCategory'] === 'Dog') {
        arrindex = 2;
    }
    else if (objCopy['animalCategory'] === 'Goat') {
        arrindex = 3;
    }
    else if (objCopy['animalCategory'] === 'Horses') {
        arrindex = 4;
    }
    console.log(arrindex);
    petList.availability[arrindex].forEach(function (element) {
        var Div = document.createElement('p');
        Div.setAttribute('style', 'width: fit-content; height: fit-content; border: 1px solid white; color:white; border-radious:20px;font-size: 20px');
        Div.innerHTML = "<br> <b> Category of Pet </b> : " + element['animalCategory'] + " <br>\n        <b> Pet's Name </b> : " + element['name'] + " <br> <b> Pet's Age </b> : " + element['age'] + " \n        <br> <b> Pet's Gender </b> : " + element['gender'] + " <br> <b> Pet's Vaccination Status </b> : " + element['vaccinationStatus'] + "\n        <br> <b> Pet's Health Status </b> : " + element['healthCondition'] + " ";
        document.getElementById('details').appendChild(Div);
    });
    document.getElementById('details').style.visibility = 'visible';
    document.getElementById('details').style.overflow = 'scroll';
};
