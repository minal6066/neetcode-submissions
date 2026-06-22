class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let cur = '';
        let stack = [];

        for(let c of (path+'/')){
            if(c == '/'){
                if (cur == '..'){
                    stack.length && stack.pop();
                } else if(cur != '' && cur!='.'){
                    stack.push(cur);
                }
                cur = '';
            } else {
                cur +=c;
            }
        }
        return '/'+stack.join('/');
    }
}
