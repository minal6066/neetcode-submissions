class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.prefixSums();
    }

    prefixSums() {
        let rows = this.matrix.length;

        let cols = this.matrix[0].length;
        this.sumMat = Array.from({ length: rows + 1 }, () =>
            Array(cols + 1).fill(0)
        );

        for (let r = 0; r < rows; r++) {
            let prefix = 0;
            for (let c = 0; c < cols; c++) {
                prefix += this.matrix[r][c];
                let above = this.sumMat[r][c + 1];
                this.sumMat[r + 1][c + 1] = prefix + above;
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;
        let bottomRight = this.sumMat[row2][col2];
        let left = this.sumMat[row2][col1 - 1];
        let above = this.sumMat[row1 - 1][col2];
        let top = this.sumMat[row1 - 1][col1 - 1];

        return bottomRight - left - above + top
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
