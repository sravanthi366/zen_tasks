"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
var Documents = /** @class */ (function () {
    function Documents(ref, referal, validity, aadhar) {
        this.referal = ref;
        this.valdDetails = validity;
        this.nameOfTheReferal = referal;
        this.aadhar = aadhar;
    }
    Documents.prototype.getReferal = function () {
        console.log(this.referal);
    };
    Documents.prototype.getNameOfTheReferal = function () {
        console.log(this.nameOfTheReferal);
    };
    Documents.prototype.getNameTheReferal = function (name, mobile) {
        console.log(this.nameOfTheReferal);
    };
    Documents.prototype.getValid = function () {
        console.log(this.valdDetails);
    };
    Documents.prototype.getAadhar = function () {
        console.log(this.aadhar);
    };
    return Documents;
}());
exports.Documents = Documents;
