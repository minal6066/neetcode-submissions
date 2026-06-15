class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l=0, res=Infinity, sum=0;
        for (let r=0;r<nums.length;r++){
            sum+=nums[r];
            while(sum>=target){
                res = Math.min(res, r-l+1);
                sum-=nums[l];
                l++;
            }
        }
        return res==Infinity ? 0 : res;
    }
}
