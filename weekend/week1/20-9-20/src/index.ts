//import {Employee} from "./employee"
import{Documents} from "./document"

let referal = (<HTMLFormElement>document.getElementById('reference')).value;
let nameOfTheReferal = (<HTMLFormElement>document.getElementById('nameOfTheReferal')).value;
let validDetails = (<HTMLFormElement>document.getElementById('valdDetails')).value;
let aadhar = (<HTMLFormElement>document.getElementById('aadhar')).value;

(<HTMLElement>document.getElementById('employee-details')).addEventListener('click',function(){
    
let obj1 = new Documents('referal','nameOfTheReferal',validDetails,aadhar)
console.log(obj1.getReferal());
console.log(obj1.getAadhar());
console.log(obj1.getNameOfTheReferal());
console.log(obj1.getAadhar());

});;




/* From Employee file */
/* let emp = new Employee('Sravanthi',164910003, 35)
emp.setAddress({
    doorNo:100,
    street:"kotturu",
    locality:"near statue",
    district:'chennai',
    pincode:678589
    })*/

    /* from document file */
   /* let obj1 = new Documents('sravanthi','prathap',"valid",89786756)
obj1.getReferal();
obj1.getAadhar();
obj1.getNameTheReferal('abcd',9089765)
console.log(emp.getAddress())*/