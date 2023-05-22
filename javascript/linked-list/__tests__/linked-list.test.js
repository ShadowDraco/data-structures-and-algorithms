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

  it("properly points its head to the first node and appends multiple values", () => {
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

  it("can properly return a collection of all the values that exist in the linked list", () => {
    // insert will leave values in reverse order because it puts them at the front
    expect(list.read()).toEqual([3, 2, 1]);
  });

  it("can determine if a value is included", () => {
    expect(list.includes(2)).toBeTruthy();
    expect(list.includes(5)).toBeFalsy();
  });

  it("can return its values as a string", () => {
    expect(list.toString()).toEqual("{ 3 } -> { 2 } -> { 1 } -> { NULL }");
  });

  it("can insertBefore and insertAfter, and in the middle, front, end", () => {
    list.append(4);
    list.insertBefore(4, 5);
    list.insertAfter(5, 6);
    list.insertBefore(3, 0);

    expect(list.includes(5)).toBeTruthy();
    expect(list.read()).toEqual([0, 3, 2, 1, 5, 6, 4]);
  });
});
