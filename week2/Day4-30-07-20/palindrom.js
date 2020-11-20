let str = ["malayalam","madam","lal","amma"]

let val1= str.forEach(function(element){
 console.log (element=element.split("").reverse().join(""));
})

var palstr = [];

if(str===val1)
palstr.push(val1)

palstr.forEach(element => {
    console.log(element)
});
