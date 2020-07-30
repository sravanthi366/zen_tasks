/* Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true. */


var obj = {
    mykey: "value",
    product: "dell",
    day: "sunday"
   };
   
   function addProperty(obj, key){
   if(key in obj){ 
       obj[key]='true';
       console.log(obj);
   }else{
       console.log('NA');
   }
    
   }
   
   addProperty(obj,'mykey');