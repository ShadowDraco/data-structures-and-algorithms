"use strict";

const { Graph } = require(".");

describe("Graph", () => {
  it("can initialize", () => {
    const graph = new Graph();

    const A = graph.addVertex("A");
    const B = graph.addVertex("B");
    const C = graph.addVertex("C");
    const D = graph.addVertex("D");
    const E = graph.addVertex("E");
    const F = graph.addVertex("F");
    const G = graph.addVertex("G");
    const H = graph.addVertex("H");

    graph.addDirectEdge(A, B);
    graph.addDirectEdge(A, D);
    graph.addDirectEdge(A, C);
    graph.addDirectEdge(B, G);

    graph.addDirectEdge(D, F);
    graph.addDirectEdge(D, H);
    graph.addDirectEdge(F, H);
    graph.addDirectEdge(F, E);
    graph.addDirectEdge(C, H);

    expect(graph.size()).toEqual(8);
  });
});
