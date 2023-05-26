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
  Can successfully push onto a stack
  Can successfully push multiple values onto a stack
  Can successfully pop off the stack
  Can successfully empty a stack after multiple pops
  Can successfully peek the next item on the stack
  Can successfully instantiate an empty stack
  Calling pop or peek on empty stack raises exception
*/
