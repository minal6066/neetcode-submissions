class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let currentSum = 0, res = 0;
        let prefixSum = new Map();
        prefixSum.set(0, 1);

        for (let i = 0; i < nums.length; i++) {
            currentSum += nums[i];
            let diff = currentSum - k;
            res += prefixSum.get(diff) || 0;
            prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);

        }

        return res;
    }
}
