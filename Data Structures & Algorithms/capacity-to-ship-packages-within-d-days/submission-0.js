class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l=Math.max(...weights), r=0;
        for(let weight of weights){
            r+=weight;
        }

        function isCap(cap){
            let ships = 1, currentCap = cap;
            for(let w of weights){
                if(currentCap - w < 0){
                    ships++;
                    currentCap = cap
                }
                currentCap -= w;
            }
            return ships<=days;
        }


        let res=r;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if (isCap(m)){
                res = Math.min(res, m);
                r = m-1;
            } else {
                l = m+1;
            }

        }

        return res;
    }
}
