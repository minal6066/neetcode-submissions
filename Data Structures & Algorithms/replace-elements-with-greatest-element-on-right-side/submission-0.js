class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max=0;
        for(let i=arr.length-2; i>=0; i--){
            let temp = Math.max(max,arr[i+1]);
            max = Math.max(max,arr[i]);
            arr[i]=temp;
            
        }
        arr[arr.length-1] = -1;
        return arr;
    }
}
