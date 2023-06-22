"use strict";

const { mainModule } = require("process");

// need to write the "callback" compareYear
function sortYear(arr) {
  return arr.sort(compareYear);
}

function compareYear(a, b) {
  if (a.year === b.year) return 0;

  if (a.year > b.year) return -1;

  if (a.year < b.year) return 1;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}

function compareTitle(a, b) {
  //do the thing
  // grab the titles
  let aT = a.title;
  let bT = b.title;
  // create array from titles
  let aTArray = aT.split(" ");
  let bTArray = bT.split(" ");

  // declare function to split the title and remove A, An, The for comparison
  const removeAandThe = (array) => {
    let newArray = ["A", "An", "The"].includes(array[0])
      ? array.splice(1)
      : array;

    return newArray;
  };
  // join the new array together by ' ' to keep same format
  const newAT = removeAandThe(aTArray).join(" ");
  const newBT = removeAandThe(bTArray).join(" ");

  // return the localCompare which does the comparison for us as 0, 1, -1
  return newAT.localeCompare(newBT);
}

module.exports = { sortYear, compareYear, sortTitle, compareTitle };
