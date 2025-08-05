/**
 * Stack implementation using an array.
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Push an element onto the stack.
     *
     * @param element
     */
    push(element) {
        this.items.push(element);
    }

    /**
     * Pop an element from the stack.
     *
     * @returns {*|null}
     */
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    /**
     * Peek at the top element of the stack without removing it.
     *
     * @returns {null|*}
     */
    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    /**
     * Check if the stack is empty.
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Stack;