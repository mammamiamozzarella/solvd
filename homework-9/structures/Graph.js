/**
 * Graph data structure implementation with methods for adding vertices and edges,
 * and performing depth-first and breadth-first searches.
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Adds a vertex to the graph.
     *
     * @param vertex
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /**
     * Adds an edge between two vertices in the graph.
     *
     * @param v1
     * @param v2
     */
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    /**
     * Performs a depth-first search (DFS) starting from a given vertex.
     *
     * @param start
     * @returns {*[]}
     * @constructor
     */
    DFS(start) {
        const visited = new Set();
        const result = [];

        const dfsHelper = (vertex) => {
            if (!vertex || visited.has(vertex)) return;
            visited.add(vertex);
            result.push(vertex);
            for (const neighbor of this.adjacencyList[vertex]) {
                dfsHelper(neighbor);
            }
        };

        dfsHelper(start);
        return result;
    }

    /**
     * Performs a breadth-first search (BFS) starting from a given vertex.
     *
     * @param start
     * @returns {*[]}
     * @constructor
     */
    BFS(start) {
        const visited = new Set([start]);
        const queue = [start];
        const result = [];

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

module.exports = Graph;