"use strict";

const arrayReverse = require("../arrayReverse");

describe("arrayReverse", () => {
  it("reverses even and odd arrays", () => {
    expect(arrayReverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(arrayReverse([2, 5, 8, 3, 7, 9])).toEqual([9, 7, 3, 8, 5, 2]);
  });
});
