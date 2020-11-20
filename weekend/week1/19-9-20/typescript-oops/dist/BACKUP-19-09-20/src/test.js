var Documents1 = /** @class */ (function () {
    function Documents1() {
    }
    Documents1.prototype.setReference = function (refer1) {
        this.reference = refer1;
    };
    Documents1.prototype.setNameOfTheRefferal = function (nameOfRefer) {
        this.nameOfTheRefferal = nameOfRefer;
    };
    Documents1.prototype.setValidDocument = function (valid) {
        this.validDocument = valid;
    };
    Documents1.prototype.setAadharId = function (aadhar) {
        this.aadharId = aadhar;
    };
    Documents1.prototype.getReference = function () {
        console.log(this.reference);
    };
    Documents1.prototype.getNameOfTheReferal = function () {
        console.log(this.nameOfTheRefferal);
    };
    Documents1.prototype.getvalid = function () {
        console.log(this.validDocument);
    };
    return Documents1;
}());
var doc11 = new Documents1();
doc11.setReference("sravanthi");
doc11.setValidDocument(true);
doc11.setAadharId(98767878);
doc11.setNameOfTheRefferal('ssss');
doc11.getNameOfTheReferal();
doc11.getReference();
doc11.getvalid();
