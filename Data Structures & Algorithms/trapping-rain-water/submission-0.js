class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxL = new Array(height.length).fill(0);
        let maxR = new Array(height.length).fill(0);

        for(let i=1;i<=height.length-1;i++){
            if(i>0){
                maxL[i]=Math.max(height[i-1],maxL[i-1]);
            }
        }

        for(let j=height.length-1;j>=0;j--){
            if(j<height.length-1){
                maxR[j] = Math.max(height[j+1], maxR[j+1]);
            }
        }

        let res = 0;
        for(let i=1;i<height.length-1;i++){
            let trapped = Math.min(maxL[i], maxR[i]) - height[i];
            if(trapped > 0){
                res += trapped;
            }
        }

        return res;
    }
}
