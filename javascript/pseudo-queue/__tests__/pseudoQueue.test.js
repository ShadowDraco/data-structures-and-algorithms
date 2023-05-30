const PseudoQueue = require("../");

describe("PseudoQueue", () => {
  it("enqueues", () => {
    const queue = new PseudoQueue();
    expect(queue.enqueue(1)).toBeTruthy();
  });

  it("dequeues", () => {
    const queue = new PseudoQueue();
    expect(queue.enqueue(1)).toBeTruthy();
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
  });
});
