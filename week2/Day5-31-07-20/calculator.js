class Calculator{
    constructor(a,b) {
        this.a=a,
        this.b=b;
    }
    
    add(a,b){return a+b};
    sub(a,b){return a-b};
    dev(a,b){return a/b};
    mul(a,b){return a*b};
    modulo(a,b){return a%b}
}

let calcUser = new Calculator(10,20)

console.log(calcUser.add(calcUser.a,calcUser.b))
console.log(calcUser.sub(calcUser.a,calcUser.b))
console.log(calcUser.dev(calcUser.a,calcUser.b))
console.log(calcUser.mul(calcUser.a,calcUser.b))
console.log(calcUser.modulo(calcUser.a,calcUser.b))




