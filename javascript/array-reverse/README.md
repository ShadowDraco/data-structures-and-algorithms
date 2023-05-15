# Challenge Title

Write a function called arrayReverse that takes in an array as an argument and reverses it in place.

## Whiteboard Process

![Whiteboard for array-reverse]('./../assets/UMLArrayReverse.png')

## Approach & Efficiency

I used an approach that uses a while loop. My original thought included a for-loop that iterated arr.length / 2 times (or breaks when arr.length-i - i). However this approach only works on arrays with an even number of values. I then used a while loop. Assigning a variable to 0, and one to array.length gives the front and back of the array. Swap the two using a temp variable, then increment and decrement the front and back values respectively until the middle is reached. When the middle is reached the swap is skipped so values do not get duplicated.

## Solution

<!-- Show how to run your code, and examples of it in action -->

To run the code simply call the reverseArray function in the terminal
with an array containing two or more values. It will return the reverse.

For example: reverseArray([5, 4, 6, 7, 8]) will return [8, 7, 6, 4, 5]
