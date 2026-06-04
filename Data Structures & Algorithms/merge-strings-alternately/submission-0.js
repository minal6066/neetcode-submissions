class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let f=0,s=0,str='';
        while(f<word1.length && s<word2.length){
            str+=word1[f];
            str+=word2[s];
            f++;s++;
        }
        while(f<word1.length){
            str+=word1[f];
            f++;
        }
        while(s<word2.length){
            str+=word2[s];
            s++;

        }

        return str;
    }
}
