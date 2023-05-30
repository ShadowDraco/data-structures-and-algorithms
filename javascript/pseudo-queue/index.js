const { Stack } = require("../stack-and-queue/index");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    let stack1 = this.stack1;
    let stack2 = this.stack2;

    // empty stack1
    while (stack1.top) {
      stack2.push(stack1.pop());
    }
    // add value to bottom
    stack1.push(value);
    // put old values back on top
    while (stack2.top) {
      stack1.push(stack2.pop());
    }

    return true;
  }

  dequeue() {
    let stack1 = this.stack1;
    let stack2 = this.stack2;
    // queue is empty if stack 1 has nothing
    if (!stack1.top) {
      throw new Error("The queue is empty");
    }

    return stack1.pop();
  }
}

module.exports = PseudoQueue;
