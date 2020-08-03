class Circle{
       
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius
    }

    getColor(){
        return this.color;
    }
    setColor(radius){
        this.radius=radius;
    }

    toString(){

    }

    getArea(radius){
        var area =Math.PI*radius*radius ;
    return area;
    }

}

let obj= new Circle(10,'red');
