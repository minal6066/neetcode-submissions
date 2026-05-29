class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = new Map();
        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], (count.get(nums[i]) || 0) + 1);
            if (count.size > 2) {
                let newCount = new Map();
                for (const [key, value] of count.entries()) {

                    if (value > 1) {
                        newCount.set(key, value - 1);
                    }
                }
                count = newCount;
            }
        }

        let res = [];
        for (const [key] of count.entries()) {
            let frequency = 0;

            for (const num of nums) {
                if (num === key) frequency++;
            }

            if (frequency > Math.floor(nums.length / 3)) {
                res.push(key);
            }
        }

        return res;
    }
}
