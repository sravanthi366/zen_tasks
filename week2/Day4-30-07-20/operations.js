function opeValues(i,arr){
    let val1 =10; let val2= 90;
    return arr[i](val1,val2);    // This will operations function
}

function add(a,b){
    sum=0;
    sum = a+b;
   return sum;
}

function sub(a,b){
    sub=0;
    sub = a-b;
   return sub;
}

function mul(a,b){
    mul=1;
    mul = a*b;
   return mul;
}


let opeArr= [add,sub,mul]

console.log(opeValues(0,opeArr))
console.log(opeValues(1,opeArr))
console.log(opeValues(2,opeArr))
