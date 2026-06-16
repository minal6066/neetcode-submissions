class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for(let c=0;c<s.length;c++){
            switch(s[c]){
                case '(': 
                case '{':
                case '[':
                    stack.push(s[c]); break;
                
                case ')':
                if (stack.pop() !== '(') return false;
                break;

            case '}':
                if (stack.pop() !== '{') return false;
                break;

            case ']':
                if (stack.pop() !== '[') return false;
                break;
            }
        }
        return stack.length == 0;
    }
}
