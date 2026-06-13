class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0;
        let l=0;
        let m = new Set();
        for(let r=0;r<s.length;r++){
            while(m.has(s[r])){
                res = Math.max(res, r-l);
                m.delete(s[l]);
                l++;
            }
            m.add(s[r]);
            res = Math.max(res, r-l+1);
        }
        return res;
    }
}
