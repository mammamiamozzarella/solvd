/**
 * Binary Tree implementation
 * This code defines a BinaryTree class with methods to insert nodes, search for values, and perform tree traversals.
 * It includes a TreeNode class to represent each node in the tree.
 */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new value into the binary tree.
     *
     * @param value
     */
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this._insertRecursively(this.root, newNode);
    }

    /**
     * Recursively inserts a new node into the tree.
     *
     * @param node
     * @param newNode
     * @private
     */
    _insertRecursively(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertRecursively(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertRecursively(node.right, newNode);
            }
        }
    }

    /**
     * Searches for a value in the binary tree.
     *
     * @param value
     * @returns {boolean}
     */
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    /**
     * Performs an inorder traversal of the binary tree.
     *
     * @param node
     * @returns {*[]}
     */
    inorder(node = this.root) {
        if (!node) return [];
        return [...this.inorder(node.left), node.value, ...this.inorder(node.right)];
    }

    /**
     * Performs a preorder traversal of the binary tree.
     *
     * @param node
     * @returns {*[]}
     */
    preorder(node = this.root) {
        if (!node) return [];
        return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
    }

    /**
     * Performs a postorder traversal of the binary tree.
     *
     * @param node
     * @returns {*[]}
     */
    postorder(node = this.root) {
        if (!node) return [];
        return [...this.postorder(node.left), ...this.postorder(node.right), node.value];
    }
}

module.exports = BinaryTree;