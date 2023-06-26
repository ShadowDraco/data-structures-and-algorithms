"use strict";
const LinkedList = require("../../linked-list");

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split("");

    // use character reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    // multiply ascii sum by large prime number
    let initialHash = asciiSum * 599;
    // return remainder of product divided by the size as the key
    return initialHash % this.size;
  }

  set(key, value, approach = "overwrite") {
    let position = this.hash(key);
    let data = { [key]: value };

    //* linked list approach */
    if (approach === "linked-list") {
      if (this.buckets[position]) {
        let bucket = this.buckets[position];
        bucket.add(data);
      } else {
        let bucket = new LinkedList();
        bucket.add(data);
        this.buckets[position] = bucket;
      }
    }
    //* Simple approach */
    else if (approach === "overwrite") {
      this.buckets[position] = data;
    }
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      return this.buckets[position][key];
    }
  }

  has(key) {
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys() {
    let results = this.buckets.reduce((keysArr, bucket) => {
      if (bucket) {
        return [...keysArr, Object.keys(bucket)[0]];
      } else {
        return keysArr;
      }
    }, []);

    return results;
  }
}

module.exports = HashTable;
