class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let n = s1.length;
        let m1 = new Array(26).fill(0);
        let m2 = new Array(26).fill(0);
        for(let i=0;i<s1.length;i++){
            m1[s1[i].charCodeAt()-'a'.charCodeAt()]++;
            m2[s2[i].charCodeAt()-'a'.charCodeAt()]++;
        }

        let matches = 0;
        for(let i=0; i<26;i++){
            matches += (m1[i]==m2[i] ? 1: 0);
        }

        let l=0;
        for(let r=n; r<s2.length; r++){
           if(matches == 26) return true;
            let index = s2[r].charCodeAt() - 'a'.charCodeAt();
            m2[index]++;
            if(m1[index] == m2[index]){
                matches++;
            } else if(m1[index]+1 == m2[index]){
                matches--;
            }

            index = s2[l].charCodeAt() - 'a'.charCodeAt();
            m2[index]--;
            if(m1[index] == m2[index]){
                matches++;
            } else if(m1[index]-1 == m2[index]){
                matches--;
            }
            l+=1;
        }
        return matches==26;
    }
}
