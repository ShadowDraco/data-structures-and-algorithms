const insert = (sorted, value) => {
  let i = 0;
  while (value > sorted[i]) {
    i = i + 1;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i = i + 1;
  }
  sorted.push(value);
};

const insertionSort = (input) => {
  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
};

module.exports = insertionSort;
