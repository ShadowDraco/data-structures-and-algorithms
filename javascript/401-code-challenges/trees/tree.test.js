const { Tree, Node } = require("./index");

describe("Tree", () => {
  it("Can create a new tree", () => {
    const tree = new Tree();

    expect(tree).toBeTruthy();
    expect(tree.root).toBeNull();
  });

  it("Can create a new tree with starting value", () => {
    const tree = new Tree(1);

    expect(tree.root.value).toEqual(1);
  });

  it("Can successfully return preOrder", () => {
    const tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.right.right = new Node(10);

    expect(tree.preOrder()).toEqual([5, 3, 1, 7, 10]);
  });

  it("Can successfully return inOrder", () => {
    const tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.right.right = new Node(10);

    expect(tree.inOrder()).toEqual([1, 3, 5, 7, 10]);
  });

  it("Can successfully return postOrder", () => {
    const tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(1);
    tree.root.right.right = new Node(10);

    expect(tree.postOrder()).toEqual([1, 3, 10, 7, 5]);
  });
});

/* TESTS

Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
For a Binary Search Tree, can successfully add a left child and right child properly to a node
Can successfully return a collection from a pre-order traversal
Can successfully return a collection from an in-order traversal
Can successfully return a collection from a post-order traversal
Returns true	false for the contains method, given an existing or non-existing node value

*/
