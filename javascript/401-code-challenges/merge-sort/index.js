const mergeSort = (array) => {
  const n = array.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, n);

    mergeSort(left);
    mergeSort(right);

    return merge(left, right, array);
  }

  return array;
};

const merge = (left, right, array) => {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i = i + 1;
    } else {
      array[k] = right[j];
      j = j + 1;
    }

    k = k + 1;
  }

  while (i < left.length) {
    array[k] = left[i];
    i = i + 1;
    k = k + 1;
  }

  while (j < right.length) {
    array[k] = right[j];
    j = j + 1;
    k = k + 1;
  }

  return array;
};

module.exports = mergeSort;
