"use strict";

function leftJoin(leftHash, rightHash) {
  const results = [];
  const keys = leftHash.keys();
  keys.forEach((key) => {
    const inCommon = [];
    // push first key
    inCommon.push(key);
    // get the value from the hashmap
    let value = leftHash.get(key);
    // add that value to inCommon
    inCommon.push(value);

    let value2 = rightHash.get(key);
    if (!value2) {
      value2 = null;
    }
    inCommon.push(value2);
    results.push(inCommon);
  });
  return results;
}

module.exports = leftJoin;
