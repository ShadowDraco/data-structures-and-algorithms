"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add a node to the front with given value
  insert(value) {
    const newNode = new Node(value);
    // set this node's next to head because head already points to either the end, or the next node
    newNode.next = this.head;
    // set the head to the new node because its at the front now
    this.head = newNode;
  }

  // add a node to the end with given value
  append(value) {
    const newNode = new Node(value);

    // if head is null we assign it to the new node.
    if (!this.head) {
      this.head = newNode;

      return;
    } else {
      let current = this.head;

      // traverse the list
      while (current.next !== null) {
        current = current.next;
      }
      // we traversed the list so we can set the last node's next to newNode
      current.next = newNode;
    }
  }

  read(type = "value") {
    let valueList = [];
    let current = this.head;

    while (current !== null) {
      // Return a list of values, or the object tree respectively
      type === "value"
        ? valueList.push(current.value)
        : valueList.push(current);
      current = current.next;
    }

    return valueList;
  }

  find(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return current.value;

      current = current.next;
    }

    return false;
  }

  includes(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) return true;

      current = current.next;
    }

    return false;
  }

  toString() {
    let result = "";
    let current = this.head;

    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }

    result += "{ NULL }";

    return result;
  }
}

module.exports = LinkedList;
