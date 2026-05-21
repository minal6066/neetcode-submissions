class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        function merge(left, right){
            let sortedArr = [];

            while(left.length && right.length){
                if(left[0]<right[0]){
                    sortedArr.push(left.shift());
                } else {
                    sortedArr.push(right.shift());
                }
            }

            return [...sortedArr, ...left, ...right];
        }

        function mergeSort(arr){
            //Base Case
            if(arr.length <= 1)
            return arr;

            let mid = Math.floor(arr.length / 2)

            let left = mergeSort(arr.slice(0,mid));
            let right = mergeSort(arr.slice(mid));

            return merge(left,right);

        }

        const sorted = mergeSort(nums);
        for (let i = 0; i < nums.length; i++) {
            nums[i] = sorted[i];
        }
    }
}