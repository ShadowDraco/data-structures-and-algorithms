"use strict";

const { Movies } = require("./movies");
const { sortYear, compareYear, sortTitle, compareTitle } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);

    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Ratatouille",
      "Stardust",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);

    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });
});

describe("Comparators", () => {
  test("compare year works properly", () => {
    expect(compareYear(Movies[0], Movies[1])).toEqual(1);
    expect(compareYear(Movies[6], Movies[8])).toEqual(0);
    expect(compareYear(Movies[8], Movies[1])).toEqual(-1);
  });

  test("compare title works properly", () => {
    expect(compareTitle(Movies[0], Movies[1])).toEqual(-1);
    expect(compareTitle(Movies[5], Movies[5])).toEqual(0);
    expect(compareTitle(Movies[8], Movies[1])).toEqual(1);
  });
});
