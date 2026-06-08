class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1] == nums[i]) {

            } else {
                let a = nums[i];
                let p1 = i+1, p2 = nums.length-1;
                while (p1 < p2) {
                    if (a + nums[p1] + nums[p2] == 0) {
                        res.push([a,nums[p1], nums[p2]]);
                        p1++;
                        while(nums[p1] == nums[p1-1] && p1<p2){
                            p1++;
                        }
                    } else if (a + nums[p1] + nums[p2] < 0) {
                        p1++;
                    } else {
                        p2--;
                    }
                }
            }
        }
        return res;
    }
}
