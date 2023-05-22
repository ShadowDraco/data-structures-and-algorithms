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

  insertBefore(targetValue, newValue) {
    if (!this.head) throw new Error("List is empty");

    if (this.head.value === targetValue) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        if (current.next.value === targetValue) {
          // if the next node is the one we're looking for
          // set a temp
          let placeHolder = current.next;
          // replace the current next
          let newNode = new Node(newValue);
          newNode.next = placeHolder;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      return new Error("Target value is not found");
    }
  }

  insertAfter(targetValue, newValue) {
    let current = this.head;

    while (current.next) {
      // if current value is what we want
      if (current.value === targetValue) {
        // check if next is null
        if (current.next === null) {
          current.next = new Node(newValue);
        } else {
          // if its not null keep the value as a place holder
          let placeholder = current.next;
          // create new node
          let newNode = new Node(newValue);
          // set next to the new value
          current.next = newNode;
          // add placeholder back into list
          newNode.next = placeholder;
        }
      }
      current = current.next;
    }
    // if we didn't the value
    return new Error("Value not found");
  }
}

module.exports = LinkedList;
