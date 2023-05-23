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
  // one list for many of the next tests here down
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

  it("insertBefore and insertAfter, expected failures", () => {
    expect(list.insertBefore(12, 1)).toBe("Target value is not found");
    expect(list.insertAfter(12, 1)).toEqual("Value not found");

    const newList = new LinkedList();
    expect(newList.insertBefore(1, 3)).toEqual("List is empty");
  });

  it("can determine kth from end", () => {
    // new list for these tests
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    // happy path
    expect(list.kthFromEnd(2)).toEqual(3);
    // more than length
    expect(list.kthFromEnd(10)).toEqual("k is greater than list length");
    // negatives
    expect(list.kthFromEnd(-1)).toEqual("k cannot be negative");
    // k = length
    expect(list.kthFromEnd(4)).toEqual(1);
  });

  it("returns the right value from kthFromEnd() when list length = 1", () => {
    const list = new LinkedList();
    list.insert(1);
    expect(list.kthFromEnd(3)).toEqual(1);
  });
});
