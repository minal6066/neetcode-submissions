class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let countZero = 0;
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i]) {
                product = product * nums[i];
            } else {
                countZero++;
                if(countZero>=2){
                    return Array(nums.length).fill(0);
                }
            }
        }
        let productArr = [];
        for (let i = 0; i < nums.length; i++) {
            if(nums[i]){
                productArr.push(countZero ? 0 : product/nums[i]);
            } else {
                productArr.push(product);
            }
        }

        return productArr;
    }
}
