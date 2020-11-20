var Stack = /** @class */ (function() {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function(element) {
        this.items.push(element);
    };
    Stack.prototype.pop = function() {
        if (this.items.length == 0)
            console.log("underflow");
        return this.items.pop();
    };
    return Stack;
}());
// functions to be implemented
/* 1.push (item)
2. pop()
3. peek()
4. isEmpty()
5.printStack()
*/
/* instaiation */
var stack = new Stack();
stack.push("arun");
stack.push("sravanthi");
stack.push("xyz");
stack.push("abc");
stack.push("jsksxjk");
stack.push("lakshmi");
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();