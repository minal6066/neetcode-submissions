class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res, count=0;
        for(let num of nums){
            if(res == undefined){
                res = num;
            }
            if(res == num){
                count++;
            } else if(count>0){
                count--;
            } else {
                res = num;
                count=1;
            }
        }
        return res;
    }
}
