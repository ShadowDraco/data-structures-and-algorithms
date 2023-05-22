"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("Linked List", () => {
  it("instantiates a new linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it("can properly insert into the list", () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  it("will properly point its head to the first node", () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    // Can properly insert multiple nodes into the linked list
    list.insert(1);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });
  // one list for the rest of the tests
  const list = new LinkedList();
  list.insert(1);
  list.insert(2);
  list.insert(3);

  it("will return true when finding a value within the linked list that exists", () => {
    expect(list.find(2)).toBeTruthy();
  });
  it("will return false when searching for a value in the linked list that does not exist", () => {
    expect(list.find(4)).toBeFalsy();
  });
  it("can properly return a collection of all the values that exist in the linked list", () => {
    // insert will leave values in reverse order because it puts them at the front
    expect(list.read()).toEqual([3, 2, 1]);
  });

  it("can determine if a value is included", () => {
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes(5)).toBeFalsy();
  });

  it("can return its values in as a string", () => {
    expect(list.toString()).toEqual("{ 3 } -> { 2 } -> { 1 } -> { NULL }");
  });
});
