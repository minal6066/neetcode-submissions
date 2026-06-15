class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let t = {0:0, 1:0, 2:0};

        for (let num of nums){
            t[num]++;
        }

        let i=0;
        Object.keys(t).forEach((key) => {
            while(t[key]>0){
                nums[i]=key;
                i++;
                t[key]--;
            }
        });
    }
}