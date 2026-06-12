class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        
        let pre = strs[0];
        for(let i=1;i<strs.length;i++){
            let temp = '';
            let j=0;
            while(j<=pre.length && j<=strs[i].length && pre[j]==strs[i][j]){
                temp+=pre[j];
                j++;
            }
            pre = temp;
        }
        return pre;
    }
}
