const AnimalShelter = require(".");

describe("Queue Animal Shelter", () => {
  it("it creates a new Shelter with an empty queue", () => {
    const shelter = new AnimalShelter();

    expect(shelter).toBeTruthy();
  });
  it("it enqueues new animals", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("kitty", "cat");
    shelter.enqueue("puppy", "dog");

    expect(shelter).toBeTruthy();
    expect(shelter.queue.front.value.name).toEqual("kitty");
    expect(shelter.queue.front.next.value.name).toEqual("puppy");
  });
  it("it enqueues new animals", () => {
    const shelter = new AnimalShelter();

    shelter.enqueue("kitty", "cat");
    shelter.enqueue("puppy", "dog");

    expect(shelter).toBeTruthy();
    expect(shelter.queue.front.value.name).toEqual("kitty");
    expect(shelter.queue.front.next.value.name).toEqual("puppy");

    expect(shelter.dequeue("hamster").name).toEqual("kitty");
  });
});
