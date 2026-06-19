class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i=0;i<temperatures.length;i++){
            while(stack.length > 0 && temperatures[i]>stack.at(-1)[0]){
                let [stackT, stackInd] = stack.pop();
                res[stackInd] = i-stackInd;
            }
            stack.push([temperatures[i],i]);
        }
        return res;
    }
}
