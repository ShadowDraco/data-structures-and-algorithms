"use strict";

class Node {
  constructor(value, k = 0) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.children = new Array(k).fill(null);
  }
}

class Tree {
  constructor(value = null) {
    this.root = value ? new Node(value) : null;
  }

  preOrder() {
    const results = [];

    // recursively discover all child nodes of first node.
    const traverse = (node) => {
      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      // if no more nodes then exit.
    };

    traverse(this.root);

    return results;
  }

  inOrder() {
    const results = [];

    // recursively discover all child nodes of first node.
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      // put results in order by traversing left, printing, then right
      // node.left < node.right so its //? in order
      results.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
      // if no more nodes then exit.
    };

    traverse(this.root);

    return results;
  }

  postOrder() {
    const results = [];

    // recursively discover all child nodes of first node.
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
      // add result POST order - literally
      results.push(node.value);
      // if no more nodes then exit.
    };

    traverse(this.root);

    return results;
  }
}

module.exports = { Tree, Node };
