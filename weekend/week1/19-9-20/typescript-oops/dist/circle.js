var Circle = /** @class */ (function () {
    function Circle(radi, color1) {
        this.radious = radi;
        this.color = color1;
    }
    Circle.prototype.getRadious = function () {
        var area = Math.PI * this.radious * this.radious;
        var circumstance = 2 * Math.PI * this.radious;
        console.log(area);
        console.log(circumstance);
    };
    Circle.prototype.getColor = function () {
        console.log(this.color);
    };
    return Circle;
}());
var obj2 = new Circle(4, "green");
obj2.getRadious();
obj2.getColor();
