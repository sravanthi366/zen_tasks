class Availability{
    availability;
    constructor(){
        this.availability =[[
            {
                animalCategory:"Cat",
                name:"lilly",
                gender:"Female",
                age:10,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"
            },
            {
                animalCategory:"Cat",
                name:"rose",
                gender:"Female",
                age:8,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"
            },
            {
                animalCategory:"Cat",
                name:"lipsy",
                gender:"Female",
                age:11,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"
            },
            {
                animalCategory:"Cat",
                name:"bunny",
                gender:"Male",
                age:3,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"
            },
            {
                animalCategory:"Cat",
                name:"chinnu",
                gender:"Male",
                age:6,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"
            }
        ],
        [
            {
                animalCategory:"Camel",
                name:"chinnu",
                gender:"Male",
                age:6,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"

            },
            {
                 animalCategory:"Camel",
                name:"lilly",
                gender:"Female",
                age:10,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"},
                {
                    animalCategory:"Camel",
                    name:"rose",
                    gender:"Female",
                    age:8,
                    vaccinationStatus:"All vactinations are done",
                    healthCondition:"Good"
                },
                {
                    animalCategory:"Cat",
                    name:"lipsy",
                    gender:"Female",
                    age:11,
                    vaccinationStatus:"All vactinations are done",
                    healthCondition:"Good"
                }
        ],
        [
            {
                animalCategory:"Dog",
                    name:"lipsy",
                    gender:"Female",
                    age:11,
                    vaccinationStatus:"All vactinations are done",
                    healthCondition:"Good"

            },
            {animalCategory:"Dog",
                name:"bunny",
                gender:"Male",
                age:3,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"}

        ],
            [
                {
            
                    animalCategory:"Goat",
                        name:"lipsy",
                        gender:"Female",
                        age:9,
                        vaccinationStatus:"All vactinations are done",
                        healthCondition:"Good"
    
                
                
            },
            {
            
                animalCategory:"Goat",
                    name:"milky",
                    gender:"Female",
                    age:5,
                    vaccinationStatus:"All vactinations are done",
                    healthCondition:"Good"

            
            
        },
        {
            
            animalCategory:"Goat",
                name:"raju",
                gender:"Male",
                age:7,
                vaccinationStatus:"All vactinations are done",
                healthCondition:"Good"

        
        
    },
    {
            
        animalCategory:"Goat",
            name:"Monu",
            gender:"Male",
            age:4,
            vaccinationStatus:"All vactinations are done",
            healthCondition:"Good"

    
    
},
{
            
    animalCategory:"Goat",
        name:"rasi",
        gender:"Female",
        age:6,
        vaccinationStatus:"All vactinations are done",
        healthCondition:"Good"



}
        ],
        [
            {
        animalCategory:"Horse",
        name:"laaalu",
        gender:"Female",
        age:13,
        vaccinationStatus:"All vactinations are done",
        healthCondition:"Good"
            }
        ]
    ]

    }
}

/* Class for Enquery */
class Enquiry {
    name;
    telephone;
    adoptStatus;
    category;
    display;
    constructor() {
        this.display = [];
    }
    request(obj) {
        this.display.push(obj);
    }
}

/* object creation */
let enquery = new Enquiry()
let petList = new Availability()
console.log(petList)
let objCopy;
/* Form Validations */
let submitForm = ()=>{
    event.preventDefault();
    document.getElementById('details').style.visibility = 'hidden';
    
    let object = new Object()
        object['name'] = `${(document.getElementById('FullName') as HTMLInputElement).value}`

        object['telephone'] = `${(document.getElementById('phoneNo') as HTMLInputElement).value}`
        if ((document.getElementById('yes') as HTMLInputElement).checked === true) {
            object['adoptStatus'] = `${(document.getElementById('yes') as HTMLInputElement).value}`
        }
        else {
            object['adoptStatus'] = `${(document.getElementById('No') as HTMLInputElement).value}`
        }
        object['animalCategory'] = `${(document.getElementById('category') as HTMLInputElement).value}`
        enquery.display.push(object)
    console.log(object);

    

    if (object['animalCategory'] === 'Cat') {
        
        let status = document.getElementById('status');
        
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;

        status.innerHTML = `Your Query has "${petList.availability[0].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['animalCategory'] === 'Camel'){
        let status = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;
        status.innerHTML = `Your Query has "${petList.availability[1].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['animalCategory'] === 'Dog'){
        let status = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;
        status.innerHTML = `Your Query has "${petList.availability[2].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['animalCategory'] === 'Goat'){
        let status = document.getElementById('status');
        (document.getElementById('status')).innerHTML = ``;
        document.getElementById('availability').style.visibility = 'visible';
        status.innerHTML = `Your Query has "${petList.availability[3].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['animalCategory'] === 'Horses'){
        let status = document.getElementById('status');
        (document.getElementById('status')).innerHTML = ``;
        document.getElementById('availability').style.visibility = 'visible';
        status.innerHTML = `Your Query has "${petList.availability[4].length}" Matches`;
        document.getElementById('availability').appendChild(status);
        /* document.getElementById('availability').appendChild(status); */
        
        
    }
    objCopy = new Object(object);
  

    
        console.log(petList.availability[0].length, object['animalCategory']);
        var resetForm = <HTMLFormElement>document.getElementById('form');
        resetForm.reset();
        
    }
    
    

let showDetails = () =>{
    
   let arrindex;
    document.getElementById('availability').style.visibility = 'hidden';
    
    
    if(objCopy['animalCategory'] === 'Cat'){
        
        arrindex = 0;
       
    }
    else if(objCopy['animalCategory'] === 'Camel'){
       
        arrindex = 1;
    }
    if(objCopy['animalCategory'] === 'Dog'){

        arrindex = 2;
    }
    else if(objCopy['animalCategory'] === 'Goat'){

        arrindex = 3;
    }
    else if(objCopy['animalCategory'] === 'Horses'){

        arrindex = 4;
    }
console.log(arrindex)
    
 petList.availability[arrindex].forEach(element => {
        var Div = document.createElement('p');
        Div.setAttribute('style','width: fit-content; height: fit-content; border: 1px solid white; color:white; border-radious:20px;font-size: 20px');
        Div.innerHTML = `<br> <b> Category of Pet </b> : ${element['animalCategory']} <br>
        <b> Pet\'s Name </b> : ${element['name']} <br> <b> Pet\'s Age </b> : ${element['age']} 
        <br> <b> Pet\'s Gender </b> : ${element['gender']} <br> <b> Pet\'s Vaccination Status </b> : ${element['vaccinationStatus']}
        <br> <b> Pet\'s Health Status </b> : ${element['healthCondition']} `;
        document.getElementById('details').appendChild(Div);
    });
    document.getElementById('details').style.visibility = 'visible';
    document.getElementById('details').style.overflow = 'scroll'
   
}
