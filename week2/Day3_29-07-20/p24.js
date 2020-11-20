/* Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object. */

var obj = {
    mykey: "value",
    product: "dell",
    day: "sunday"
   };
   
   function addProperty(obj, key){
   if(key in obj){ 
       delete obj[key];
       console.log(obj[key]);
   }else{
       console.log('NA');
   }
    
   }
   
   addProperty(obj,'mykey');
   