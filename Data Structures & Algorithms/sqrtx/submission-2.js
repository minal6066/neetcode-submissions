class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x <= 1) return x;
        let res=0;
        let l=0,r=x/2;
        while(l<=r){
            let m=Math.floor((l+r)/2);
            if(m*m == x){
                return m;
            } else if(m*m < x){
                res = m;
                l=m+1;
            } else {
                r=m-1;
            }
        }
        return res;
    }
}
