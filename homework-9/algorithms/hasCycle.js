/**
 * Determines if a linked list has a cycle.
 *
 * @param head
 * @returns {boolean}
 */
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

module.exports = hasCycle;