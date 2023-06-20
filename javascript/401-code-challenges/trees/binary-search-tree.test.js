const { Node } = require("./index");
const BinarySearchTree = require("./BinarySearchTree");

describe("Binary Search Tree", () => {
  it("Can create a new tree", () => {
    const tree = new BinarySearchTree();

    expect(tree).toBeTruthy();
    expect(tree.root).toBeNull();
  });

  it("Can create a new tree with starting value", () => {
    const tree = new BinarySearchTree(1);

    expect(tree.root.value).toEqual(1);
  });

  it("Can successfully add with null root", () => {
    const tree = new BinarySearchTree();

    tree.add(1);

    expect(tree.root.value).toEqual(1);
  });

  it("Can successfully add multiple values in order", () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(6);
    tree.add(9);
    tree.add(1);

    expect(tree.inOrder()).toEqual([1, 3, 5, 6, 9]);
  });

  it("Can successfully tell if tree contains a value", () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(6);
    tree.add(9);
    tree.add(1);

    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(5)).toEqual(true);
    expect(tree.contains(6)).toEqual(true);
    expect(tree.contains(9)).toEqual(true);
    // false
    expect(tree.contains(10)).toEqual(false);
    expect(tree.contains(8)).toEqual(false);
  });
});

/* TESTS

For a Binary Search Tree, can successfully add a left child and right child properly to a node
Returns true false for the contains method, given an existing or non-existing node value

*/
