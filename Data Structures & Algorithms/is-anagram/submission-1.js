class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        let mapS = {}, mapT = {};

        for(let i=0;i<s.length;i++){
            if(mapS.hasOwnProperty(s[i])){
                mapS[s[i]]++;
            } else {
                mapS[s[i]] = 1;
            }

            if(mapT.hasOwnProperty(t[i])){
                mapT[t[i]]++;
            } else {
                mapT[t[i]] = 1;
            }
        }

        for (let key in mapS) {
            if (mapS[key] !== mapT[key]) {
            return false;
            }
        }

        return true;

    }

}
