class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let result;
        for(let num of nums){
            result ^= num;
        }
        return result;
    }
}
