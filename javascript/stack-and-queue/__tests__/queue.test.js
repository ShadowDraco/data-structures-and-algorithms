"use strict";

const { Queue } = require("../index");

describe("Queue", () => {
  it("It can successfully instantiate a new Queue", () => {
    let queue = new Queue();
    expect(queue).toBeTruthy();
  });
  it("Peeking empty queue throws an error", () => {
    let queue = new Queue();

    expect(() => {
      queue.peek();
    }).toThrow();
  });
  it("Can successfully enqueue onto a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
  });
  it("Can successfully enqueue multiple values onto a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next).toBeNull();
  });
  it("Can successfully dequeue multiple values off a queue and be empty", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
    expect(queue.front.next.next.next).toBeNull();
    queue.dequeue();
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next.value).toEqual(3);

    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
  it("Can successfully peek the next value in the queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
    queue.dequeue();
    expect(queue.peek()).toEqual(2);
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
