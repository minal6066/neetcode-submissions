class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}{
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(2*(n-1)).fill(0);
        for(let i=0;i<nums.length;i++){
            ans[i]=nums[i];
            ans[i+n] = nums[i];
        }

        return ans;
    }
}
