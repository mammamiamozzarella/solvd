/**
 * Queue implementation using an array.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds an element to the end of the queue.
     *
     * @param element
     */
    enqueue(element) {
        this.items.push(element);
    }

    /**
     * Removes and returns the first element of the queue.
     *
     * @returns {*|null}
     */
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    /**
     * Returns the first element of the queue without removing it.
     *
     * @returns {*|null}
     */
    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    /**
     * Checks if the queue is empty.
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Queue;