const reverseArray = (arr) => {
  let front = 0;
  let back = arr.length - 1;

  while (back > front) {
    let temp = arr[front];
    arr[front] = arr[back];
    arr[back] = temp;

    front++;
    back--;
  }

  return arr;
};

// my original thought attempted to use a for loop, but it breaks with odd arrays.
const reverseEvenArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let front = i;
    let back = arr.length - (1 + i);

    if (front === back) return arr;

    arr[front] = arr[back];
    arr[back] = arr[temp];
  }
};

module.exports = reverseArray;
