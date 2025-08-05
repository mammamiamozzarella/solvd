const BinaryTree = require('./structures/BinaryTree');
const isBST = require('./algorithms/isBST');
const LinkedList = require('./structures/LinkedList');
const hasCycle = require('./algorithms/hasCycle');
const Graph = require('./structures/Graph');
const MinMaxStack = require('./algorithms/MinMaxStack');

console.log("Binary Tree");
const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);

console.log("Tree is a BST:", isBST(bst.root)); // true

console.log("\nLinked List");
const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

console.log("Linked List has cycle:", hasCycle(list.head)); // false

console.log("\nGraph Demonstration");
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
console.log("Graph adjacency list:", graph.adjacencyList);

console.log("\nMinMaxStack Demonstration");
const stack = new MinMaxStack();
stack.push(1);
stack.push(3);
stack.push(8);
console.log("Min:", stack.getMin()); // 1
console.log("Max:", stack.getMax()); // 8
