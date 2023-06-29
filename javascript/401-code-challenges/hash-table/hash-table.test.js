"use strict";

const { has } = require("cheerio/lib/api/traversing");
const HashTable = require(".");

describe("Hash Table", () => {
  it("initializes properly", () => {
    const emptyHashTable = new HashTable();

    expect(emptyHashTable).toBeTruthy();
    expect(emptyHashTable).toEqual({ size: undefined, buckets: [undefined] });

    const hashTable = new HashTable(10);

    expect(hashTable).toBeTruthy();
    expect(hashTable).toEqual({
      size: 10,
      buckets: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    });
  });

  it("can hash values", () => {
    const hashTable = new HashTable(10);

    let hash = hashTable.hash("Hash");
    expect(hash).toEqual(2);

    hash = hashTable.hash("aaaaa");
    expect(hash).toEqual(5);
  });

  it("can set values", () => {
    const hashTable = new HashTable(10);

    hashTable.set("Hash", "my hash");
    expect(hashTable.buckets[2]).toEqual({ Hash: "my hash" });

    hashTable.set("aaaaa", "a's");
    expect(hashTable.buckets[5]).toEqual({ aaaaa: "a's" });
  });

  it("can get values", () => {
    const hashTable = new HashTable(10);

    hashTable.set("Hash", "my hash");
    hashTable.set("aaaaa", "a's");

    expect(hashTable.get("aaaaa")).toEqual("a's");
    expect(hashTable.get("Hash")).toEqual("my hash");
    expect(hashTable.get("dsafdsaf")).toEqual(undefined);
  });

  it("can see if table has values", () => {
    const hashTable = new HashTable(10);

    hashTable.set("Hash", "my hash");
    hashTable.set("aaaaa", "a's");

    expect(hashTable.has("aaaaa")).toEqual(true);
    expect(hashTable.has("Hash")).toEqual(true);
    expect(hashTable.has("Has")).toEqual(false);
    expect(hashTable.has("aa")).toEqual(false);
  });

  it("can get keys", () => {
    const hashTable = new HashTable(10);

    hashTable.set("Hash", "my hash");
    hashTable.set("aaaaa", "a's");

    expect(hashTable.keys()).toEqual(["Hash", "aaaaa"]);
  });
});
