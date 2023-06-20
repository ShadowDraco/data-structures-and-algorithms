const fizzBuzz = (tree) => {
  // create a copy
  const newTree = tree;
  const children = [];
  // assign the first children to the function FROM ROOT
  const root = newTree.root;
  if (root) children.push(root.children);

  // Check the value of the root node
  // check if child's value is matching'
  if (root.value % 3 && root.value % 5 === 0) {
    root.value = "FizzBuzz";
  } else if (root.value % 3 === 0) {
    root.value = "Fizz";
  } else if (root.value % 5 === 0) {
    root.value = "Buzz";
  } else {
    // turn value into a string
    root.value = `${root.value}`;
  }

  const traverse = (children) => {
    // create a list of the next children to traverse
    const nextChildren = [];

    // traverse
    children.forEach((child) => {
      // push in one child as we iterate if that child has children
      if (child.children && child.children.length > 0) nextChildren.push(child);
      // check if child's value is matching'
      if (child.value % 3 && child.value % 5 === 0) {
        child.value = "FizzBuzz";
      } else if (child.value % 3 === 0) {
        child.value = "Fizz";
      } else if (child.value % 5 === 0) {
        child.value = "Buzz";
      } else {
        // turn value into a string
        child.value = `${child.value}`;
      }
    });
    // when done searching
    if (nextChildren.length > 0) traverse(nextChildren);
    // else continue
  };

  traverse(children);
  // exit point of traverse
  // immediately return the edited tree
  return newTree;
};

module.exports = fizzBuzz;
