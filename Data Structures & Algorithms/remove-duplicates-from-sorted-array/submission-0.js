class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k=0, t=0;
        while(t<nums.length){
            if(t>0 && nums[k-1]==nums[t]){
                t++;
            } else {
                nums[k]=nums[t];
                t++;
                k++;
            }
        }
        return k
    }
}
