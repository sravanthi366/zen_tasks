let header = document.createElement('header')
header.setAttribute('style', 'background-color:blue;color:white;text-align:center;margin-left:10%;margin-right:10%')
header.innerHTML = `<h1>Registration Form</h1>`
document.body.append(header)

let form = document.createElement('form');
form.setAttribute('class', 'form');
form.setAttribute('action', 'index2.html')
form.setAttribute('onSubmit', ' return Form()')


let first_Name = document.createElement('label');
first_Name.setAttribute('for', 'FirstName');
first_Name.innerText = 'First Name '
form.appendChild(first_Name)
let first_Name_Inp = document.createElement('input');
first_Name_Inp.setAttribute('id', 'firstName')
first_Name_Inp.Type = 'Text';
first_Name_Inp.name = 'First Name';
first_Name_Inp.placeholder = 'First Name';
form.appendChild(first_Name_Inp);
let br = document.createElement('br');
form.append(br);
let Last_Name = document.createElement('label');
Last_Name.setAttribute('for', 'Last Name');
Last_Name.innerText = 'Last Name'
form.appendChild(Last_Name)
let Last_Name_Inp = document.createElement('input');
Last_Name_Inp.setAttribute('id', 'last_Name')
Last_Name_Inp.Type = 'Text';
Last_Name_Inp.name = 'LastName';
Last_Name_Inp.placeholder = 'Last Name';
form.appendChild(Last_Name_Inp);

let br2 = document.createElement('br');
form.append(br2);






let add = document.createElement('label');
add.setAttribute('for', 'address');
add.innerText = 'Address'
form.appendChild(add)
let add_inp = document.createElement('input');
add_inp.id = 'Address'
add_inp.Type = 'Text';
add_inp.name = 'address';
add_inp.placeholder = 'Address';
form.appendChild(add_inp);


let br3 = document.createElement('br');
form.append(br3);


let pin_No = document.createElement('label');
pin_No.setAttribute('for', 'pincode');
pin_No.innerText = 'Pincode'
form.appendChild(pin_No)
let pincode_Inp = document.createElement('input');
pincode_Inp.id = 'Pincode'
pincode_Inp.Type = 'text';
pincode_Inp.name = 'pincode';
pincode_Inp.placeholder = 'Pincode';
form.appendChild(pincode_Inp);


let br4 = document.createElement('br');
form.append(br4);


let state = document.createElement('label');
state.setAttribute('for', 'state');
state.innerText = 'State'
form.appendChild(state)

let state_Inp = document.createElement('input');
state_Inp.id = 'State'
state_Inp.Type = 'Text';
state_Inp.name = 'state';
state_Inp.placeholder = 'State';
form.appendChild(state_Inp);

let br5 = document.createElement('br');
form.append(br5);

let country = document.createElement('label');
country.setAttribute('for', 'country');
country.innerText = 'Country'
form.appendChild(country)

let country_Inp = document.createElement('input');
country_Inp.id = 'Country';
country_Inp.Type = 'Text';
country_Inp.name = 'country';
country_Inp.placeholder = 'Country';
form.appendChild(country_Inp);

let br6 = document.createElement('br');
form.append(br6);


let gender = document.createElement('label');
gender.setAttribute('for', 'gender');
gender.id = 'Genderid'
gender.innerText = 'Gender'
form.appendChild(gender);


let male_inp = document.createElement('input');
male_inp.name = 'gender';
male_inp.id = 'male';
male_inp.value = 'Male';
male_inp.type = 'radio';
form.appendChild(male_inp);
let male_Label = document.createElement('label');
male_Label.setAttribute('for', 'gender');
male_Label.innerText = 'Male'
form.appendChild(male_Label);
let br12 = document.createElement('br');
form.append(br12);
let female_Inp = document.createElement('input');
female_Inp.name = 'gender';
female_Inp.id = 'female';
female_Inp.value = 'Female';
female_Inp.type = 'radio';
form.appendChild(female_Inp);
let female_Label = document.createElement('label');
female_Label.setAttribute('for', 'gender');
female_Label.innerText = 'Female'
form.appendChild(female_Label);



let br13 = document.createElement('br');
form.append(br13);

let food = document.createElement('label');
food.setAttribute('for', 'food');
food.innerText = ' Select Food Items'
form.appendChild(food);
let fooditem1 = document.createElement('input');
fooditem1.name = 'food';
fooditem1.id = 'fooditem1Input';
fooditem1.value = 'fooditem1';
fooditem1.type = 'checkbox';
form.appendChild(fooditem1);
let fooditem1Label = document.createElement('label');
fooditem1Label.setAttribute('for', 'food');
fooditem1Label.innerText = 'Poori'
form.appendChild(fooditem1Label);

let br7 = document.createElement('br');
form.append(br7);

let fooditem2 = document.createElement('input');
fooditem2.name = 'food';
fooditem2.id = 'fooditem2Input';
fooditem2.value = 'fooditem2';
fooditem2.type = 'checkbox';
form.appendChild(fooditem2);
let fooditem2Label = document.createElement('label');
fooditem2Label.setAttribute('for', 'choiceOfFood');
fooditem2Label.innerText = 'Dosa'
form.appendChild(fooditem2Label);


let br8 = document.createElement('br');
form.append(br8);
let fooditem3 = document.createElement('input');
fooditem3.name = 'food';
fooditem3.id = 'fooditem3Input';
fooditem3.value = 'fooditem3';
fooditem3.type = 'checkbox';
form.appendChild(fooditem3);
let fooditem3Label = document.createElement('label');
fooditem3Label.setAttribute('for', 'choiceOfFood');
fooditem3Label.innerText = 'Vada'
form.appendChild(fooditem3Label);


let br9 = document.createElement('br');
form.append(br9);

let fooditem4 = document.createElement('input');
fooditem4.name = 'food';
fooditem4.id = 'fooditem4Input';
fooditem4.value = 'fooditem4';
fooditem4.type = 'checkbox';
form.appendChild(fooditem4);
let fooditem4Label = document.createElement('label');
fooditem4Label.setAttribute('for', 'choiceOfFood');
fooditem4Label.innerText = 'Idli'
form.appendChild(fooditem4Label);




let br10 = document.createElement('br');
form.append(br10);

let fooditem5 = document.createElement('input');
fooditem5.name = 'food';
fooditem5.id = 'fooditem5Input';
fooditem5.value = 'fooditem5';
fooditem5.type = 'checkbox';
form.appendChild(fooditem5);
let fooditem5Label = document.createElement('label');
fooditem5Label.setAttribute('for', 'choiceOfFood');
fooditem5Label.innerText = 'Parota'
form.appendChild(fooditem5Label);



let br11 = document.createElement('br');
form.append(br11);





let Btn = document.createElement('input');
Btn.type = 'submit';
Btn.setAttribute('id', 'submit');
Btn.setAttribute('onclick', 'checkForm()')
form.appendChild(Btn);

document.body.appendChild(form);









/* Form validation */
function Form() {
    let flag = 0;
    var food = document.getElementsByName('food');
    for (i = 0; i < food.length; i++) {
        if (food[i].checked) {
            flag++
        }
        console.log(food[i])

    }


    if (flag >= 2) {

        return true;

    } else {
        alert('please select two Food Items')
        return false;
    }

}






Btn.addEventListener('click', formData);




function formData(x) {
    var First_Name = document.getElementById('firstName').value;
    localStorage.setItem('First_Name', First_Name);
    var Last_Name = document.getElementById('last_Name').value;
    localStorage.setItem('Last_Name', Last_Name);
    var Address = document.getElementById('Address').value;
    localStorage.setItem('Address', add);
    var Pincode = document.getElementById('Pincode').value;
    localStorage.setItem('Pincode', Pincode);
    var state = document.getElementById('State').value;
    localStorage.setItem('state', state);
    var Country = document.getElementById('Country').value;
    localStorage.setItem('Country', Country);
    (function genData() {
        var gen = document.getElementsByName('gender');

        for (i = 0; i < gen.length; i++) {
            if (gen[i].checked)
                var Gender = gen[i].value;
            localStorage.setItem('Gender', Gender)
        }
    })();

    (function foodData() {
        var Arr = [];
        var food = document.getElementsByName('food');
        for (i = 0; i < food.length; i++) {
            if (food[i].checked)
                Arr.push(food[i].value);
            localStorage.setItem('FoodArry', Arr)
        }
    })();




}