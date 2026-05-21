class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length == 1){
            return strs[0];
        }
        let pre = strs[0];
        for(let i=1;i<strs.length;i++){
            let temp = '';
            let x = 0;
            while(strs[i][x]==pre[x] && x<=pre.length){
                temp+=pre[x];
                x++;
            }
            pre = temp;
        }
        return pre;
    }
}
