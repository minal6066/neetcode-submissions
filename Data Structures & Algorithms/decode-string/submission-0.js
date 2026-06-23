class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        for(let c of s){
            if(c!=']'){
                stack.push(c);
            } else {
                let substr = '';
                while(stack.at(-1)!='['){
                    substr = stack.pop() + substr;
                }
                stack.pop();

                let k = '';
                while(!isNaN(Number(stack.at(-1)))){
                    k = stack.pop() + k;
                }
                stack.push(substr.repeat(Number(k)));
            }
        }
        return stack.join('');
    }
}
