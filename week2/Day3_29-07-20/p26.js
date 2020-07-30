/* Create a function that receives an array of numbers and returns an array containing only the positive numbers */

var res = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(arr) {
    
   let neg = res.filter(function(arr) {
         return (arr < 0);
    });
    
    
    let pos = res.filter(function(arr) {
    return arr > 0;
    });
    
    let zero = res.filter(function(arr) {
    return arr == 0;
    });
 res = zero.concat(pos);
      return res;
}
console.log(getPositives(res));