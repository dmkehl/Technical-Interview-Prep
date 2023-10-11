// JavaScript Sets

// Sets are a new object type included in ES6 that allow you to create collections of
// unique values. These values can be either primitive types or object references.

// How a set works:
// - A set is a collection of unique values.
// - A set can contain values of any type.
// - A set can be iterated through in insertion order.
// - A value in a set can only occur once; it is unique in the set's collection.
// - A set can be used to remove duplicate values from an array.
// - A set can be used to check if a value exists in the set.
// - A set can be used to perform set operations like union, intersection, and difference.
// - A set can be used to implement other data structures like hash tables and graphs.

// Sets are used in many areas including:
// - Hash Sets
// - Hash Tables
// - Hash Maps
// - Hash Functions
// - Hashing Algorithms

// Create a new set.
const mySet = new Set();

// Adding elements to the set.
mySet.add(1);
mySet.add(2);
mySet.add(3);

// Check if an element exists in the set.
const exists = mySet.has(2); // true

// Remove an element from the set.
mySet.delete(2);

// Get the size of the set.
const size = mySet.size; // 2

// Iterate through the elements of the set.
mySet.forEach((value) => {
  console.log(value);
});

// Clear all elements from the set.
mySet.clear();

// Set Operations
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union of two sets.
const union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5}

// Intersection of two sets.
const intersection = new Set([...setA].filter((x) => setB.has(x))); // {3}

// Difference of two sets.
const difference = new Set([...setA].filter((x) => !setB.has(x))); // {1, 2}
