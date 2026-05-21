class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let track = [];

        for (let j=0; j<nums.length; j++){
            if(track.includes(nums[j])){
                return true;
            } else {
                track.push(nums[j]);
            }
        }
        return false;
    }
}
