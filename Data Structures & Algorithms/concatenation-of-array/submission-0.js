class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}{
     */
    getConcatenation(nums) {
        let ans = []
        for(let j = 0; j < nums.length; j++){
            ans[j] = nums[j];
            ans[j+(nums.length)] = nums[j];
        }
        return ans;
    }
}
