var Paranthesis = /** @class */ (function () {
    function Paranthesis() {
        this.data =
        ;
    }
    Paranthesis.prototype.push = function (ele) {
        this.data.push(ele);
    };
    Paranthesis.prototype.pop = function () {
        this.data.pop();
    };
    Paranthesis.prototype.isBalanced = function () {
        for (var i = 0; i <= this.data.length; i++) {
            if (this.data.push() === this.data.pop())
                console.log("Given paranthesis is balanced");
            else
                console.log("unbalenced");
        }
    };
    return Paranthesis;
}());
var para = new Paranthesis();
para.push(")");
para.push("(");
para.push("{");
para.push("{");
para.push("}");
para.push("[");
para.push("]");
