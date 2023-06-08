"use strict";

const { Node } = require(".");

class kAryTree {
  constructor(value) {
    this.root = value ? new Node(value) : null;
  }

  preOrder(node) {
    let results = [];
    var currentNode = !node ? this.root : node;
    if (currentNode) {
      results.push(currentNode.value);
      for (var i = 0; i < currentNode.children.length; i++) {
        currentNode.children.length && this.preOrder(currentNode.children[i]);
      }
    }

    return results;
  }
}

module.exports = kAryTree;
