class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        function canSplit(limit){
            let sub = 0, curSum=0;
            for(let n of nums){
                curSum+=n;
                if(curSum>limit){
                    sub++;
                    curSum = n;
                }
            }
            return sub + 1 <= k;
        }

        let l=Math.max(...nums), r= nums.reduce((sum, num) => sum + num, 0);
        let res = r;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(canSplit(m)){
                res = m;
                r=m-1;
            } else {
                l=m+1;
            }
        }
        return res;
    }
}
