class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let data = {};
        for(let i=0;i<strs.length;i++){
            let temp = strs[i].split("").sort().join("");;
            if(data.hasOwnProperty(temp)){
                data[temp] = [...data[temp], strs[i]];
            } else {
                data[temp] = [strs[i]];
            }
        }
        let ans = [];
        for (let key in data) {
            ans.push(data[key]);
        }

        return ans;
    }
}
