// JavaScript Arrays

// An array is an ordered collection of elements.
// It can be used to store multiple values in a single variable.
// Arrays are indexed starting from 0.
// Arrays are mutable, meaning that their elements can be modified.
// Arrays are dynamic, meaning that elements can be added or removed.
// Arrays can contain elements of different data types.
// Arrays can be nested, meaning that arrays can contain other arrays.

// Example:
const arr = [1, 2, 3, 4, 5];

// Array Length
const length = arr.length; // Gets the number of elements in the array.
console.log("Array Length:", length);

// Accessing Elements
const firstElement = arr[0]; // Accesses the first element at index 0.
console.log("First Element:", firstElement);

// Adding Elements to the End
arr.push(6); // Adds an element to the end of the array.
console.log("After Push:", arr);

// Removing Elements from the End
arr.pop(); // Removes the last element from the array.
console.log("After Pop:", arr);

// Adding Elements to the Beginning
arr.unshift(0); // Adds an element to the beginning of the array.
console.log("After Unshift:", arr);

// Removing Elements from the Beginning
arr.shift(); // Removes the first element from the array.
console.log("After Shift:", arr);

// Creating a Slice
const subArray = arr.slice(1, 3); // Creates a new array from index 1 to 2.
console.log("Subarray:", subArray);

// Modifying the Original Array (splice)
arr.splice(1, 2, 6, 7); // Removes two elements starting from index 1 and adds 6 and 7.
console.log("After Splice:", arr);

// Mapping Elements
const doubledArray = arr.map((element) => element * 2); // Doubles each element.
console.log("Doubled Array:", doubledArray);

// Filtering Elements
const evenNumbers = arr.filter((element) => element % 2 === 0); // Filters even numbers.
console.log("Even Numbers:", evenNumbers);

// Reducing Elements (Sum)
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // Calculates the sum.
console.log("Sum:", sum);

// Searching for an Element
const indexOfFive = arr.indexOf(5); // Finds the index of the value 5.
console.log("Index of 5:", indexOfFive);

// Sorting the Array
arr.sort(); // Sorts the array in ascending order.
console.log("Sorted Array:", arr);

// Reversing the Array
arr.reverse(); // Reverses the array.
console.log("Reversed Array:", arr);
