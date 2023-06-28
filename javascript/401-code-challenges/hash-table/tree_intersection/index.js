const HashTable = require("..");

const tree_intersection = (tree1, tree2) => {
  const table = new HashTable(100);
  const intersections = [];
  if (!tree1 || !tree2) throw new Error("missing one or more trees!");
  if (!tree1.root) throw new Error("Tree 1 is not valid");
  if (!tree2.root) throw new Error("Tree 2 is not valid");

  tree1.preOrder().forEach((value, index) => {
    table.set(`${value}`, `${index}`);
  });
  tree2.preOrder().forEach((value) => {
    if (table.has(`${value}`)) {
      intersections.push(value);
    }
  });
  return intersections;
};

module.exports = tree_intersection;
