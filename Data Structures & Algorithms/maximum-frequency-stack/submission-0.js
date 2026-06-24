class FreqStack {
    constructor() {
        this.count = {}
        this.maxCount = 0;
        this.stack = {};
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let valCount = (this.count[val] || 0) + 1;
        this.count[val] = (this.count[val] || 0) + 1;
        if (valCount > this.maxCount) {
            this.maxCount = valCount;
            this.stack[this.maxCount] = []
        }
        if (!this.stack[valCount]) {
            this.stack[valCount] = [];
        }

        this.stack[valCount].push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        let res = this.stack[this.maxCount].pop();
        this.count[res] -= 1;
        if (this.stack[this.maxCount].length == 0) {
            this.maxCount -= 1;
        }
        return res;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
