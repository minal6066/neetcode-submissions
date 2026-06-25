class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (nums[m] == target) {
                return m;
            }
            //Left sorted array
            if (nums[m] >= nums[l]) {
                if (nums[m] < target || target < nums[l]) {
                    l = m+1;
                } else {
                    r = m-1;
                }
            } 
            //Right sorted array
            else {
                if(nums[m]>target || target>nums[r]){
                    r = m-1;
                } else {
                    l = m+1;
                }
            }
        }
        return -1;
    }
}
