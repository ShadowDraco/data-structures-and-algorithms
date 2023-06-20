const insertionSort = require(".");

describe("Insertion Sort", () => {
  it("sorts easy arrays", () => {
    expect(insertionSort([5, 4, 3, 2, 8])).toEqual([2, 3, 4, 5, 8]);
  });
  it("sorts arrays with duplicates", () => {
    expect(insertionSort([6, 5, 4, 3, 3, 2, 8, 8])).toEqual([
      2, 3, 3, 4, 5, 6, 8, 8,
    ]);
  });
  it("sorts almost sorted arrays", () => {
    expect(insertionSort([2, 3, 4, 8, 5])).toEqual([2, 3, 4, 5, 8]);
  });
});
