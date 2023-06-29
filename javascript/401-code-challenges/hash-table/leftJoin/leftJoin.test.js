"use strict";

const HashTable = require("../index");
const leftJoin = require(".");

describe("Hash Table", () => {
  it("joins tables with values properly ", () => {
    let table1 = new HashTable(100);
    let table2 = new HashTable(100);

    // add values to table 1 and table 2
    table1.set("fond", "enamored");
    table1.set("dilligent", "employed");
    table2.set("fond", "averse");
    table2.set("not-dilligent", "hard-working");

    expect(leftJoin(table1, table2)).toEqual([
      ["dilligent", "employed", null],
      ["fond", "enamored", "averse"],
    ]);
  });
});
