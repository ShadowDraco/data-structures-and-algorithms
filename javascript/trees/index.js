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
  constructor() {
    this.root = null;
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

class BinarySearchTree extends Tree {
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    function traverse(root) {
      if (value > root.value) {
        root.right ? traverse(root.right) : (root.right = new Node(value));
      } else {
        root.left ? traverse(root.left) : (root.left = new Node(value));
      }
    }
    traverse(this.root);
  }

  contains(value) {
    // declare variable outside of the recursion because return true doesn't work??
    let found = false;
    function traverse(root) {
      if (root.value === value) {
        found = true;
        return;
      }

      if (value > root.value) {
        root.right ? traverse(root.right) : (root.right.value = value);
      } else {
        root.left ? traverse(root.left) : (root.left.value = value);
      }
    }
    // start traversing to search
    traverse(this.root);

    return found;
  }
}
