class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(!s.length) return true;
        let i=0, j=0;
        while(j<t.length && i<s.length){
            let c = s[i];
            if(c == t[j]){
                i++; j++;
            } else {
                j++;
            }
            if(i==s.length) return true;
        }
        return false;
    }
}
