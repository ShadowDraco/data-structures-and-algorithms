# Challenge Title

Write a function called insertion sort that uses array insertion properties to sort a given array least to greatest.

## Whiteboard Process

![Whiteboard for Insertion Sort](./assets/UMLInsertionSort.png)

## Approach & Efficiency

I used an approach that uses two functions. I use a for loop in the first function to call the second (Insert) on each value in the input array. The insert function uses a nested while loop to check the values of each number in the temporary 'sorted' array and insert the new value in the proper place. If the new value is inserted in the middle it shifts all values prior to it to ensure they remain sorted before continuing.

## Solution

<!-- Show how to run your code, and examples of it in action -->

To run the code simply call the insertionSort function in the file, passing in an array with two or more values. Or include the function in another file to test your own uses. Run `npm test insertion-sort` to run the built in tests

For example: insertionSort([5, 4, 6, 7, 8]) will return [4, 5, 6, 7, 8]
