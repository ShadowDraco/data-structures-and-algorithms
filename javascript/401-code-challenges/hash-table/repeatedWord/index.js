const HastTable = require("..");

const repeatedWord = (string) => {
  const splitString = string.split(" ");
  const table = new HastTable(1024);
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

console.log(
  repeatedWord(
    "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
  )
);
module.exports = repeatedWord;
