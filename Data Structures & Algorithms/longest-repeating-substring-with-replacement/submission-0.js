class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0;
        let res=0, count = {};
        for(let r=0;r<s.length;r++){
            count[s[r]] = count.hasOwnProperty(s[r]) ? count[s[r]]+1: 1;
            while((r-l+1 - Math.max(...Object.values(count))) > k){
                count[s[l]]-=1;
                l+=1;
            }

            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
