var movieArray = [];

class Movie{
    
    constructor(title,studio,rating) {
        
        this.title = title;
        this.studio = studio;
        this.rating = (typeof rating === 'undefined') ? 'PG':rating; 
        this.array=this;
    }
    get array(){
		
        return movieArray;
    }
set array(value){
    movieArray.push(this)
}
    
}

let  obj1 = new Movie('MCA', 'abc');
let obj2= new Movie ('ragada', 'xyz');
let obj3 = new Movie ('RR', 'def', 4.6);
let obj4 = new Movie('shiva', 'ganga',5.0);
let obj5 = new Movie("Casino","Eon Productions","PG13")

console.log(movieArray);