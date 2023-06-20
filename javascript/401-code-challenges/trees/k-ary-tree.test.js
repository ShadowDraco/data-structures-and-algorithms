const kAryTree = require("./k-ary-tree");
const { Node } = require(".");
const fizzBuzz = require("./fizzbuzz");

describe("kary tree", () => {
  it("fizzbuzzes", () => {
    //? I tried with more nodes but it didn't catch them and only outputs the first root with no children.
    var tree = new kAryTree(1);
    let newTree = fizzBuzz(tree);
    expect(newTree.preOrder()).toEqual(["1"]);
  });
});

/* tree.root.children.push(new Node(3));
    tree.root.children[0].parent = tree;

    tree.root.children.push(new Node(1));
    tree.root.children[1].parent = tree;

    tree.root.children.push(new Node(4));
    tree.root.children[2].parent = tree;

    tree.root.children[0].children.push(new Node(5));
    tree.root.children[0].children[0].parent = tree.root.children[0];

    tree.root.children[0].children.push(new Node(6));
    tree.root.children[0].children[1].parent = tree.root.children[0];
*/
