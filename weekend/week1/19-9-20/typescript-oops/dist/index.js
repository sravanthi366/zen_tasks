"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var document_1 = require("./document");
/* From Employee file */
var emp = new employee_1.Employee('Sravanthi', 164910003, 35);
emp.setAddress({
    doorNo: 100,
    street: "kotturu",
    locality: "near statue",
    district: 'chennai',
    pincode: 678589
});
/* from document file */
var obj1 = new document_1.Documents('sravanthi', 'prathap', "valid", 89786756);
obj1.getReferal();
obj1.getAadhar();
obj1.getNameTheReferal('abcd', 9089765);
