"use strict";

const { Graph } = require(".");

describe("Graph", () => {
  it("can initialize", () => {
    const graph = new Graph();

    expect(graph.size()).toEqual(0);
  });

  it("can add an vertex", () => {
    const graph = new Graph();
    const A = graph.addVertex("A");

    expect(graph.size()).toEqual(1);
  });

  it("can add an edge between vertices", () => {
    const graph = new Graph();
    const A = graph.addVertex("A");
    const B = graph.addVertex("B");
    graph.addDirectEdge(A, B);

    expect(graph.size()).toEqual(2);
    expect(graph.getNeighbors(A)[0].vertex.value).toEqual("B");
  });

  it("can do breadth first", () => {
    const graph = new Graph();

    const A = graph.addVertex("A");
    const B = graph.addVertex("B");
    const C = graph.addVertex("C");
    const D = graph.addVertex("D");

    graph.addDirectEdge(A, B);
    graph.addDirectEdge(A, D);
    graph.addDirectEdge(A, C);

    const graphArray = [];
    function toArray(value) {
      graphArray.push(value);
    }

    graph.breadthFirst(A, toArray);
    expect(graphArray).toEqual(["A"]);
  });

  it("can do depth first", () => {
    const graph = new Graph();

    const A = graph.addVertex("A");
    const B = graph.addVertex("B");
    const C = graph.addVertex("C");
    const D = graph.addVertex("D");

    graph.addDirectEdge(A, B);
    graph.addDirectEdge(A, D);
    graph.addDirectEdge(A, C);

    const graphArray = [];
    function toArray(value) {
      graphArray.push(value);
    }

    graph.depthFirst(A, toArray);
    expect(graphArray).toEqual(["A", "C", "D", "B"]);
  });
});
