class Paranthesis{
    data;
    constructor(){
        this.data = 
    }
    push(ele){
        this.data.push(ele);
    }
    pop(){
        this.data.pop()
    }
    isBalanced(){
        for(let i =0; i<=this.data.length;i++){
            if(this.data.push()===this.data.pop())
                console.log("Given paranthesis is balanced")
            else
                console.log("unbalenced")

        }
        
    }
}

let para = new Paranthesis()
para.push(")")
para.push("(")
para.push("{")
para.push("{")
para.push("}")
para.push("[")
para.push("]")