class Circle{
    radious:number;
    color:string;
    constructor(radi:number,color1:string){
        this.radious = radi;
        this.color = color1;
    }
    getRadious(){
        let area = Math.PI*this.radious*this.radious;
        let circumstance = 2*Math.PI*this.radious
        console.log (area);
        console.log(circumstance); 
      
        
    }
    getColor(){
        console.log (this.color);
    }

}
let obj2 = new Circle(4,"green")
obj2.getRadious();
obj2.getColor();