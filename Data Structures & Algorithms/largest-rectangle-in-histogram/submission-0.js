class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        let stack = [] // pairs : {index, height}

        for (let i = 0; i < heights.length; i++) {
            let start = i, h = heights[start];
            while (stack.length && stack.at(-1)[1] > h) {
                let [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }
            stack.push([start, h]);
        }

        for (let [index, height] of stack) {
            maxArea = Math.max(
                maxArea,
                height * (heights.length - index)
            );
        }

        return maxArea;
    }
}
