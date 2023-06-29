# Challenge Sort Comparators

Write a hash table implementation for future reference!

## Approach & Efficiency

The hash table has many ways to implement hashing to increase efficiency and lookup while reducing collisions. The hashing function is currently built very simply and our collisions are only handled with a linked list or overwriting.
Other functions include `has(key)` `get(key)` `hash(value)` `set(key, value)` and `keys()` All values placed into this table should be strings.

## Functions

The hash table contains:

`has(key)` function to see if a string already exists as a key in the table, returning true or false.

`get(key)` taking in a string, and returns the value hashed to the key at `bucket[position][key]`

`set(key, value)` adds a key value pair into the hash table by hashing the key, and creating a bucket at the hashed position. The function takes in an optional parameter 'approach' that changes between overwriting collision values or storing collision values in a linked-list

`hash(key)` returns an index to place the key in the table. This hash function is consistent.

`keys()` takes no parameters and simply returns all of the keys in the list as an array of strings.

## Solution

<!-- Show how to run your code, and examples of it in action -->

To run the code simply call one of the lookup or set functions on a hashtable instance in the file, Tests will also be available with `npm test hash-table`

### Related

[repeatedWord Function](./repeatedWord/README.md)
[tree_intersection Function](./tree_intersection/README.md)
