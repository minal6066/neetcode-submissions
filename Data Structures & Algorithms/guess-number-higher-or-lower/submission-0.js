/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l=1,r=n;
        while(l<=r){
            let m=Math.floor((l+r)/2);
            let t = guess(m);
            if(t==0){
                return m;
            } else if(t==-1){
                r=m-1;
            } else {
                l=m+1;
            }
        }
    }
}
