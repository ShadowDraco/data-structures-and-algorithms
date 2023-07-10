class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.AdjList.set(vertex, []);
    return vertex;
  }
  addDirectEdge(startVertex, endVertex, weight = 0) {
    const neighbors = this.AdjList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.AdjList.get(vertex)];
  }

  getVertices() {
    let iterator = this.AdjList.keys();
    return iterator;
  }

  breadthFirst(root, callback) {
    const queue = [root];

    const visited = new Set();
    visited.add(root);
    let current = null;

    while (queue.length) {
      current = queue.pop();

      if (callback) {
        callback(current.value);
      }
    }

    const neighbors = this.getNeighbors(current);

    for (let edge of neighbors) {
      if (!visited.has(edge.vertex)) {
        visited.add(edge.vertex);
        queue.unshift(edge.vertex);
      }
    }
  }

  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();

      if (callback) {
        callback(current.value);
      }

      const neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
  }

  size() {
    return this.AdjList.size;
  }
}

module.exports = { Vertex, Edge, Graph };
