class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;

        let top = 0, bot = rows - 1;

        while (top <= bot) {
            let m = Math.floor((top + bot) / 2);

            if (target < matrix[m][0]) {
                bot = m - 1;
            } else if (target > matrix[m][cols - 1]) {
                top = m + 1;
            } else {
                let row = m;

                let l = 0, r = cols - 1;

                while (l <= r) {
                    let mid = Math.floor((l + r) / 2);

                    if (target > matrix[row][mid]) {
                        l = mid + 1;
                    } else if (target < matrix[row][mid]) {
                        r = mid - 1;
                    } else {
                        return true;
                    }
                }

                return false;
            }
        }

        return false;
    }
}
