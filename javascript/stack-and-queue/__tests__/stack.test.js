"use strict";
const { Stack } = require("../index");

describe("Stack", () => {
  it("It can successfully instantiate a new Stack", () => {
    let stack = new Stack();
    expect(stack).toBeTruthy();
  });
  it("Peeking empty stack throws an error", () => {
    let stack = new Stack();

    expect(() => {
      stack.peek();
    }).toThrow();
  });
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });
  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });
  it("Can successfully pop multiple values off a stack and be empty", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
    stack.pop();
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);

    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next value in the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
    stack.pop();
    expect(stack.peek()).toEqual(2);
  });
});
