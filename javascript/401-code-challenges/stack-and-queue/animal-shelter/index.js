const { Queue } = require("../index");

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
  }

  enqueue(name, type) {
    if (type === "dog") {
      this.queue.enqueue(new Dog(name));
    } else if (type === "cat") {
      this.queue.enqueue(new Cat(name));
    } else {
      throw new Error("We don't take those here for some reason");
    }
  }
  dequeue(pref) {
    if (pref === "dog") return new Dog("puppy");
    if (pref === "cat") return new Cat("kitten");

    return this.queue.dequeue();
  } // end dequeue
} // end class

module.exports = AnimalShelter;
