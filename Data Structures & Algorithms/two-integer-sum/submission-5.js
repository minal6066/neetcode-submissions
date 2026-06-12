class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ind = {};
        for(let i=0;i<nums.length;i++){
            let req = target-nums[i];
            if(ind.hasOwnProperty(req)){
                return [ind[req], i];
            } else {
                ind[nums[i]] = i;
            }
        }
    }
}
