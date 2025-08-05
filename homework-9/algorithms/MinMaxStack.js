/**
 * A stack that supports push, pop, getMin, and getMax operations in O(1) time.
 */
class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    /**
     * Pushes a value onto the stack.
     *
     * @param value
     */
    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }

        if (this.maxStack.length === 0 || value >= this.getMax()) {
            this.maxStack.push(value);
        }
    }

    /**
     * Removes and returns the top value from the stack.
     *
     * @returns {*|null}
     */
    pop() {
        if (this.stack.length === 0) return null;
        const value = this.stack.pop();

        if (value === this.getMin()) {
            this.minStack.pop();
        }
        if (value === this.getMax()) {
            this.maxStack.pop();
        }

        return value;
    }

    /**
     * Returns the minimum value in the stack.
     *
     * @returns {null|*}
     */
    getMin() {
        return this.minStack.length === 0 ? null : this.minStack[this.minStack.length - 1];
    }

    /**
     * Returns the maximum value in the stack.
     *
     * @returns {null|*}
     */
    getMax() {
        return this.maxStack.length === 0 ? null : this.maxStack[this.maxStack.length - 1];
    }
}

module.exports = MinMaxStack;