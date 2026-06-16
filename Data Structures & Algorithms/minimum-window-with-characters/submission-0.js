class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t == '') return '';

        let countT={}, window={};
        for(let c of t){
            countT[c] = (countT[c] || 0) + 1;
        }

        let have=0, need = Object.keys(countT).length;
        let res = [-1,-1], resLen = Infinity;
        let l=0, r;
        for(let r=0;r<s.length;r++){
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(countT.hasOwnProperty(c) && window[c]==countT[c]){
                have+=1;
            }

            while (have == need) {
                //Update our result
                if(r-l+1 < resLen) {
                    res = [l,r];
                    resLen = r-l+1;
                }
                //Pop from left of the window
                window[s[l]]--;
                if(countT.hasOwnProperty(s[l]) && window[s[l]]<countT[s[l]]){
                    have-=1;
                }
                l+=1;
            }
        }
        [l,r] = res;
        return resLen == Infinity ? '' : s.slice(l,r+1);
    }
}
