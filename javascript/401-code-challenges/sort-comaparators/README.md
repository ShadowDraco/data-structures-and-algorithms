# Challenge Sort Comparators

Write comparator functions for specific use cases!

## Approach & Efficiency

The comparator function takes `a` and `b`, and returns a number less than zero if `a` should come before `b` when sorting is completed. There are two approaches for numbers to implement such a function. The first uses the `<` operator, and by convention returns `-1` if `a < b`. If `a > b`, it returns `1`, and if `a == b`, it returns `0`. While the contract of the comparator function says any number is a valid return so long as the less-than-0 rule holds, by convention we return `-1`, `0`, or `1`.

```
function compareNumbers(a, b) {
  if (a == b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}
```

Sorting objects typically comes down to sorting based on properties in the object. This is similar to filtering, which often checks one property’s value. When this is necessary, your callback function will take an `a` and a `b` object, apply some logic to choose which properties, and compare them using either the number or string comparisons above

## Solution

<!-- Show how to run your code, and examples of it in action -->

To run the code simply call one of the sort functions in the file, `compareYear()` or `compareTitle()` with an array of movies found in the movies.js file. Tests will also be available with npm test sort
