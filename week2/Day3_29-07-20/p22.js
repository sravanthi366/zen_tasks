/* Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
 */

var obj = {
    mykey: "value",
    product: "dell",
    day: "sunday"
   };
   
   function getProperty(obj, key){
   if(key in obj){ 
    console.log(obj[key]);
   }else{
       console.log('NA');
   }
    
   }
   
   getProperty(obj,'mykey');