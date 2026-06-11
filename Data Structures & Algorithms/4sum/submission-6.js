class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const res = [];

        // Numeric sort
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 3; i++) {
            // Skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < nums.length - 2; j++) {
                // Skip duplicate second numbers
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                let left = j + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum =
                        nums[i] +
                        nums[j] +
                        nums[left] +
                        nums[right];

                    if (sum === target) {
                        res.push([
                            nums[i],
                            nums[j],
                            nums[left],
                            nums[right]
                        ]);

                        left++;
                        right--;

                        // Skip duplicates for third number
                        while (
                            left < right &&
                            nums[left] === nums[left - 1]
                        ) {
                            left++;
                        }

                        // Skip duplicates for fourth number
                        while (
                            left < right &&
                            nums[right] === nums[right + 1]
                        ) {
                            right--;
                        }
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }

        return res;
    }
}
