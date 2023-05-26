"use strict";

// Require the linked list implementation
const LinkedList = require("../../linked-list");

// placeholder for future testing
describe("Linked List", () => {
  it("instantiates a new linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });
});

/*
  Can successfully enqueue into a queue
  Can successfully enqueue multiple values into a queue
  Can successfully dequeue out of a queue the expected value
  Can successfully peek into a queue, seeing the expected value
  Can successfully empty a queue after multiple dequeues
  Can successfully instantiate an empty queue
  Calling dequeue or peek on empty queue raises exception
*/
