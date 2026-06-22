class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = [];
        while(!seen.includes(n)){
            let sum = 0;
            for(const c of String(n)){
                sum+=(Number(c) * Number(c));
            }
            seen.push(n);
            if(sum == 1) return true;
            n=sum;
        }
        return false;
    }
}
