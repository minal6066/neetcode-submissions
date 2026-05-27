class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            if(numSet.has(num-1)){

            } else {
                let length = 0;
                while(numSet.has(num+length)){
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
