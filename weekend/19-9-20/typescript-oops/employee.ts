import{addressConfig} from "./address-config"

export class Employee{
    empName:string;
    empId:number;
    empAge:number;
    empAddress:addressConfig;
    constructor(name:string,id:number,age:number){
        this.empName = name;
        this.empId = id;
        this.empAge = age;
        //this.empAddress = address;

    }
    setAddress(add:addressConfig){
        this.empAddress = add;

    }
    getAddress(){
        return this.empAddress;
    }
}
