"use strict";

const LinkedList = require("./index");

function zipLists(listOne, listTwo) {
  const zippedList = new LinkedList();

  let L1 = listOne.head;
  let L2 = listTwo.head;

  while (L1 || L2) {
    if (L1.value) {
      zippedList.append(L1.value);
      L1 = L1.next;
    }

    if (L2.value) {
      zippedList.append(L2.value);
      L2 = L2.next;
    }
  }

  return zippedList;
}

module.exports = zipLists;
