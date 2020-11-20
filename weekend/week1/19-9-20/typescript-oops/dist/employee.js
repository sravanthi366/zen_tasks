"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, id, age) {
        this.empName = name;
        this.empId = id;
        this.empAge = age;
        //this.empAddress = address;
    }
    Employee.prototype.setAddress = function (add) {
        this.empAddress = add;
    };
    Employee.prototype.getAddress = function () {
        return this.empAddress;
    };
    return Employee;
}());
exports.Employee = Employee;
