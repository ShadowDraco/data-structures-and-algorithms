"use strict";

const { Graph } = require("../");

const createBusinessTrip = () => {
  const graph = new Graph();

  const Pandora = graph.addVertex("Pandora");
  const Arendelle = graph.addVertex("Arendelle");
  const Monstropolis = graph.addVertex("Monstropolis");
  const Naboo = graph.addVertex("Naboo");
  const Narnia = graph.addVertex("Narnia");
  const Metroville = graph.addVertex("Metroville");

  graph.addDirectEdge(Pandora, Arendelle, 150);
  graph.addDirectEdge(Pandora, Metroville, 82);
  graph.addDirectEdge(Arendelle, Metroville, 99);
  graph.addDirectEdge(Arendelle, Monstropolis, 42);
  graph.addDirectEdge(Monstropolis, Metroville, 105);
  graph.addDirectEdge(Monstropolis, Arendelle, 42);
  graph.addDirectEdge(Monstropolis, Naboo, 73);
  graph.addDirectEdge(Naboo, Narnia, 250);
  graph.addDirectEdge(Naboo, Metroville, 26);
  graph.addDirectEdge(Narnia, Naboo, 250);
  graph.addDirectEdge(Narnia, Metroville, 37);

  return graph;
};

const businessTrip = (graph, names) => {
  const visited = [];
  let totalPrice = 0;
  const cities = [...graph.getVertices()];

  names.forEach((name, i) => {
    if (!visited.includes(name)) {
      let city = cities.filter((city) => city.value === name)[0];

      if (!graph.getNeighbors(city).includes(names[i + 1])) {
        totalPrice += city.weight;
        visited.push(name);
      }
    }
  });

  return `$${totalPrice}`;
};

module.exports = { businessTrip, createBusinessTrip };
