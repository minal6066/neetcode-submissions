class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (let op of operations) {
            switch (op) {
                case '+':
                    stack.push(stack.at(-1) + stack.at(-2));
                    break;

                case 'D':
                    stack.push(stack.at(-1) * 2);
                    break;

                case 'C':
                    stack.pop();
                    break;

                default:
                    stack.push(Number(op));
            }
        }

        let count = 0;
        for (let num of stack) {
            count += num;
        }
        return count;
    }
}
