/**
 * Check if a binary tree is a binary search tree (BST).
 *
 * @param node
 * @param min
 * @param max
 * @returns {boolean|*}
 */
function isBST(node, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.value <= min || node.value >= max) return false;

    return (
        isBST(node.left, min, node.value) &&
        isBST(node.right, node.value, max)
    );
}

module.exports = isBST;