const HashTable = require("..");

const repeatedWord = (string) => {
  const splitString = string.split(" ");
  const table = new HashTable(1024);
  let foundWord = false;
  let i = 0;
  let repeated = null;
  while (!foundWord) {
    const word = splitString[i];

    if (table.has(word)) {
      repeated = word;
      foundWord = true;
    } else {
      table.set(word, word, "linked-list");
      i += 1;
    }
  }
  return repeated;
};

module.exports = repeatedWord;
