class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let ss = ''
        for (let i = 0; i < s.length; i++) {
            while (!(/[a-z0-9]/i.test(s[i])) && i < s.length) {
                i++;
            }
            if (i < s.length) {
                ss += s[i].toLowerCase();
            }
        }

        let start=0, end=ss.length-1;
        while(start<=end){
            if(ss[start]!=ss[end]) {return false;}
            start++;end--;
        }

        return true;
    }
}
