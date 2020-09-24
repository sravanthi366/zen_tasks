import {Employee} from "./employee"
import{Documents} from "./document"

/* From Employee file */
let emp = new Employee('Sravanthi',164910003, 35)
emp.setAddress({
    doorNo:100,
    street:"kotturu",
    locality:"near statue",
    district:'chennai',
    pincode:678589
    })

    /* from document file */
    let obj1 = new Documents('sravanthi','prathap',"valid",89786756)
obj1.getReferal();
obj1.getAadhar();
obj1.getNameTheReferal('abcd',9089765)