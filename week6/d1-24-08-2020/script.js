// Chunk method
var ch = function(arr, val) {
    var arr1 = [];
    var holder = document.getElementById("chunk");
    for (var i = 0; i < arr.length; i += val) {
        arr1.push(arr.slice(i, val + i));

    }
    holder.innerHTML += "<p>" + JSON.stringify(arr1) + "</p>";
    //  return arr1;

}

//var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
//document.getElementById('chunk').innerHTML = ch(ar, 3);


// reduce method
var val_arr = [60, 50, 70, 80, 90, 100];
var sum = val_arr.reduce(function(acc, val) { return acc + val; });
console.log(sum);
document.getElementById('reduce').innerHTML = sum;
// filter method
var fi_arr = [20, 33, 71, 40, 60];
fi_arr = fi_arr.filter(function(x) { return (x % 2 == 0); });
console.log(fi_arr);
document.getElementById('filter').innerHTML = fi_arr;
// find method
var objArr = [
    { name: 'Sravanthi', id: 123 },
    { name: 'Anusha', id: 345 },
    { name: 'Suseela', id: 789 },
    { name: 'Sravanthi', id: 679 }
];
var arrList = objArr.find(function(user) { return (user.name === 'Sravanthi'); });
console.log(arrList);
document.getElementById('find').innerHTML = JSON.stringify(arrList);

// sum method
var sumArr = [10, 20, 30, 40, 50, 60, 70, 80];
var result = sumArr.reduce(function(acc, val) { return acc + val; });
console.log(result);
document.getElementById('sum').innerHTML = result;