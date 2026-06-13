class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0,r=1;
        let maxP = 0;
        while(l<prices.length && r<prices.length){
            if(prices[r]-prices[l] > 0){
                maxP = Math.max(maxP,prices[r]-prices[l]);
                r++;
            } else {
                l=r;
                r++;
            }
        }
        return maxP;
    }
}
