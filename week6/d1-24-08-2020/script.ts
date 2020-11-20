// Chunk method

let ch = (arr, val) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i += val) {
        arr1.push(arr.slice(i, val + i))
    }
    return arr1

}
console.log(ch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


// reduce method
let val_arr = [60,50,70,80,90,100]
let sum = val_arr.reduce((acc,val)=>acc+val)
console.log(sum)

// filter method

let fi_arr = [20,33,71,40,60]
fi_arr = fi_arr.filter(x=>(x%2==0))
console.log(fi_arr)

// find method

const objArr = [
    {name:'Sravanthi',id:123},
    {name:'Anusha',id:345},
    {name:'Suseela',id:789},
    {name:'Sravanthi', id:679}

]
let arrList = objArr.find(user=>(user.name==='Sravanthi'));
console.log(arrList)

// sum method
const sumArr = [10,20,30,40,50,60,70,80]
let  result = sumArr.reduce((acc,val)=>acc+val)
console.log(result)