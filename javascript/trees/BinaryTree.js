"use strict";

const { Node, Tree } = require("./index");

class BinaryTree extends Tree {
  super(value) {
    // create a root with or without base value
    this.root === value ? null : new Node(value);
  }

  // instance method
  max() {
    // search Tree from lowest to highest
    // return last value in returned array
    return this.preOrder().slice(-1); // [-1] does not work //* Use Arr.slice(-1)*/
  }
}

module.exports = BinaryTree;
