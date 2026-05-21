class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let track1 = {}, track2={};

        for(let i=0;i<s.length; i++){
            if(track1[s[i]]){
                track1[s[i]]++;
            } else {
                track1[s[i]] = 1;
            }
        }

        for (let j = 0; j < t.length; j++) {
                if (track2[t[j]]) {
                    track2[t[j]]++;
                } else {
                    track2[t[j]] = 1;
                }
            }
            
        for (let key in track1) {
            if (track1[key] !== track2[key]) {
            return false;
            }
        }
        return true;
    }
}
