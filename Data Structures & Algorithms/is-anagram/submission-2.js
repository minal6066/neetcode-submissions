class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length) return false;
        let as=new Array(26).fill(0), at=new Array(26).fill(0);

        for(let i=0;i<s.length;i++){
            as[s.charCodeAt(i)-'a'.charCodeAt()]++;
        }

        for(let i=0;i<t.length;i++){
            at[t.charCodeAt(i)-'a'.charCodeAt()]++;
        }

        for(let i=0;i<as.length;i++){
            if(as[i]!=at[i]){
                return false;
            }
        }
        return true;
    }
}
