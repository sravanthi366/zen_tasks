let calculateVarient = (varients,color) => {
let arr1= [];
for (let i=0; i<varients.length;i++){
    for (let j=0; j<color.length;j++){
       arr1.push(varients[i],color[j])
      
    }
}
console.log(arr1)

}
let data = [['xl','xxl','L'],['red','blue']]
let result = calculateVarient(data[0],data[1]);


