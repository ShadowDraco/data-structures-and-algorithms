const { Node } = require(".");
const BinaryTree = require("./BinaryTree");

describe("Binary Tree", () => {
  it("creates a new BinaryTree", () => {
    const tree = new BinaryTree();
    expect(tree).toBeTruthy();
    expect(tree.root).toBeNull();
  });

  it("creates a new BinaryTree with starting node", () => {
    const tree = new BinaryTree(5);
    expect(tree).toBeTruthy();
    expect(tree.root).toBeInstanceOf(Node);
    expect(tree.root.value).toEqual(5);
  });

  it("finds the max value in the tree", () => {
    const tree = new BinaryTree();
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.right.right = new Node(10);

    expect(tree.max()).toEqual([10]);
  });
});
