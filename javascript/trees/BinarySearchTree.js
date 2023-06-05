"use strict";

const { Tree, Node } = require(".");

class BinarySearchTree extends Tree {
  super(value) {
    this.root = value ? new Node(value) : null;
  }

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
        root.right && traverse(root.right);
      } else {
        root.left && traverse(root.left);
      }
    }
    // start traversing to search
    traverse(this.root);

    return found;
  }
}

module.exports = BinarySearchTree;
