const { Graph } = require(".");
const { businessTrip, createBusinessTrip } = require("./index");

describe("Graph", () => {
  it.skip("can initialize", () => {
    const graph = createBusinessTrip();

    expect(graph.size()).toEqual(6);
    expect(businessTrip(graph, ["Pandora", "Metroville"])).toEqual("$82");
  });
});
