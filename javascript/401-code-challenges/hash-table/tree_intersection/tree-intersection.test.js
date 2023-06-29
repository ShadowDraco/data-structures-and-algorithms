const tree_intersection = require(".");
const BinaryTree = require("../../trees/BinaryTree");
const { Node } = require("../../trees");

describe("Tree_intersection function works", () => {
  it("is successful with basic trees (only root)", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = new Node(5);
    tree2.root = new Node(5);

    expect(tree_intersection(tree1, tree2)).toEqual([5]);
  });

  it("expected fail with basic trees (only root)", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = new Node(8);
    tree2.root = new Node(5);

    expect(tree_intersection(tree1, tree2)).toEqual([]);
  });

  it("is successful with uneven trees and multiple values in common", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = new Node(8);
    tree1.root.left = new Node(4);
    tree1.root.right = new Node(3);
    tree2.root = new Node(9);
    tree2.root.left = new Node(6);
    tree2.root.right = new Node(12);
    tree2.root.right.left = new Node(3);
    tree2.root.right.right = new Node(4);

    expect(tree_intersection(tree1, tree2)).toEqual([3, 4]);
  });
});
