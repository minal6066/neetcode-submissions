class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let val = {};
        for(let i=0;i<nums.length;i++){
            if(val.hasOwnProperty(nums[i])){
                return true;
            } else {
                val[nums[i]] = 1;
            }
        }
        return false;
    }
}
