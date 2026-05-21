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
        

        return Object.values(data);
    }
}
