let arr = [2,3,4,5,6,7,15,8,10]
/* arr.forEach(function(element){
    if (element%2==1)
        console.log(element);
}) */

var res=(function (a) {
    a.forEach(function(element){
        if (element%2==1)
            console.log(element);
})})(arr)
