class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let a,b;
        for(let t of tokens){
            switch(t){
                case '+': a = stack.pop(); b=stack.pop();stack.push(b+a);break;
                case '-': a = stack.pop(); b=stack.pop();stack.push(b-a);break;
                case '*': a = stack.pop(); b=stack.pop();stack.push(a*b);break;
                case '/': a = stack.pop(); b=stack.pop();stack.push(Math.trunc(b/a));break;
                default: stack.push(parseInt(t));
            }
        }
        return stack[0];
    }
}
