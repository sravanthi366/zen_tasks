class Stack{
    items;
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length==0)
            console.log("underflow") ;
        else
        return this.items.pop()
    }
}
// functions to be implemented
/* 1.push (item) 
2. pop()
3. peek()
4. isEmpty()
5.printStack()
*/
/* instaiation */
let stack = new Stack()
stack.push("arun")
stack.push("sravanthi")
stack.push("xyz")
stack.push("abc")
stack.push("jsksxjk")
stack.push("lakshmi")

stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack)
