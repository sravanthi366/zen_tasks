type validDoc = "valid"|"wrong"|"mismatch"
 export class Documents{
    referal:string;
    nameOfTheReferal:string;
    valdDetails:validDoc;
    aadhar:number;
    constructor(ref:string,referal:string,validity:validDoc,aadhar:number){
        this.referal = ref;
        this.valdDetails =  validity;
        this.nameOfTheReferal = referal;
        this.aadhar = aadhar;

    }
    getReferal(){
console.log(this.referal);
    }
    getNameOfTheReferal(){
        console.log(this.nameOfTheReferal)
    }
    getNameTheReferal(name:string,mobile?:number){ //optional parameter should be last
        console.log(this.nameOfTheReferal)
    }
    getValid(){
        console.log(this.valdDetails)
    }
    getAadhar(){
        console.log(this.aadhar)
    }

}

