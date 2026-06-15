class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let res = 0;
        for(let p of details){
            let age = p.substring(11,13);
            if(age>60)res++;
        }
        return res;
    }
}
