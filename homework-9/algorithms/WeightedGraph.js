/**
 * Weighted Graph implementation using Dijkstra's algorithm
 */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Adds a vertex to the graph
     *
     * @param vertex
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    /**
     * Adds an edge between two vertices with a weight
     *
     * @param vertex1
     * @param vertex2
     * @param weight
     */
    addEdge(vertex1, vertex2, weight) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    /**
     * Finds the shortest path between two vertices using Dijkstra's algorithm
     *
     * @param start
     * @param finish
     * @returns {null|*[]}
     */
    dijkstra(start, finish) {
        const distances = {};
        const previous = {};
        const queue = new Set(Object.keys(this.adjacencyList));

        for (let vertex of queue) {
            distances[vertex] = vertex === start ? 0 : Infinity;
            previous[vertex] = null;
        }

        while (queue.size) {
            let current = [...queue].reduce((a, b) =>
                distances[a] < distances[b] ? a : b
            );

            queue.delete(current);

            if (current === finish) {
                const path = [];
                while (previous[current]) {
                    path.push(current);
                    current = previous[current];
                }
                return [start, ...path.reverse()];
            }

            if (distances[current] === Infinity) break;

            this.adjacencyList[current].forEach(neighbor => {
                let distance = distances[current] + neighbor.weight;
                if (distance < distances[neighbor.node]) {
                    distances[neighbor.node] = distance;
                    previous[neighbor.node] = current;
                }
            });
        }

        return null;
    }
}

module.exports = WeightedGraph;