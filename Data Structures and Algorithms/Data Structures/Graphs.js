// JavaScript Graphs

// A graph is a collection of nodes (vertices) connected by edges. Graphs can be used to
// represent a wide range of relationships and structures.

// Graphs are used in many areas including:
// - Social Networks
// - Maps
// - Routing Algorithms
// - Recommendation Systems
// - Computer Networks
// - Data Analytics

class Graph {
  constructor() {
    this.nodes = new Map(); // Use a Map to store nodes and their connections.
  }

  // Add a node to the graph.
  addNode(node) {
    if (!this.nodes.has(node)) {
      this.nodes.set(node, []);
    }
  }

  // Add an edge between two nodes.
  addEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      this.nodes.get(node1).push(node2);
      this.nodes.get(node2).push(node1); // For an undirected graph, connect both ways.
    }
  }

  // Remove a node from the graph.
  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.delete(node);
      // Remove all edges associated with the removed node.
      for (const adjacentNode of this.nodes.values()) {
        const index = adjacentNode.indexOf(node);
        if (index !== -1) {
          adjacentNode.splice(index, 1);
        }
      }
    }
  }

  // Remove an edge between two nodes.
  removeEdge(node1, node2) {
    if (this.nodes.has(node1) && this.nodes.has(node2)) {
      const index1 = this.nodes.get(node1).indexOf(node2);
      const index2 = this.nodes.get(node2).indexOf(node1);
      if (index1 !== -1) {
        this.nodes.get(node1).splice(index1, 1);
      }
      if (index2 !== -1) {
        this.nodes.get(node2).splice(index2, 1);
      }
    }
  }

  // Print the graph in a readable format.
  print() {
    for (const [node, connections] of this.nodes) {
      const neighbors = connections.join(", ");
      console.log(`${node} => [${neighbors}]`);
    }
  }
}

// Example Usage
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.removeNode("B");

graph.print();
