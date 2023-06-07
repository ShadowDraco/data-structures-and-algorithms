"use-strict";

function breadthFirst(tree) {
  const root = tree.root;
  const roots = [];

  if (root.left) roots.push(root.left);
  if (root.right) roots.push(root.right);

  const values = [];
  values.push(root.value);

  const traverse = (nodes) => {
    // ROOTS / NODES interchangeable words
    let node = nodes[0];
    const nextNodes = []; // roots to run the next loop with

    for (let i = 0; i < nodes.length; i++) {
      node = nodes[i]; // get the current root
      values.push(node.value);

      if (node.left) {
        nextNodes.push(node.left);
      }
      if (node.right) {
        nextNodes.push(node.right);
      }
    }

    // if there are more nodes continue, else exit
    if (nextNodes.length > 0) traverse(nextNodes);
  };
  // START POINT
  traverse(roots); // first roots taken from tree.root
  //// Exit Point
  return values;
}

module.exports = breadthFirst;
