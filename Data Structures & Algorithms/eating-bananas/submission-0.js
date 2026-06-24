class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles = piles.sort((a, b) => a - b);
        let l=1, r=piles.at(-1), ans=piles.at(-1);
        while(l<=r){
            let m = Math.floor((l+r)/2);
            let curHrs = 0;
            for(let n of piles){
                curHrs += Math.ceil(n/m);
            }
            if(curHrs<=h){
                ans = Math.min(m, ans);
                r = m-1;
            } else if(curHrs > h){
                l=m+1;
            }
        }
        return ans;
    }
}
