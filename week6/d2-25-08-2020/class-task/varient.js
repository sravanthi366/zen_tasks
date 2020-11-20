var calculateVarient = function(varients, color) {
    var arr1 = [];
    for (var i = 0; i < varients.length; i++) {

        for (var j = 0; j < color.length; j++) {
            arr1.push((varients[i]), color[j]);

        }



    }
    console.log(arr1);



};
var data = [
    ['xl', 'xxl', 'L'],
    ['red', 'blue']
];
var result = calculateVarient(data[0], data[1]);