// Javscript Suffic Array and Suffix Tree

// Suffix Array

// A suffix array is an array that contains all the suffixes of a given string, sorted in
// lexicographic order. It can be used for pattern matching and various string-related tasks

// How a suffix array works:
// - A suffix array is an array of integers that represents the starting indices of all suffixes of a string.
// - A suffix array can be constructed in O(n log n) time.
// - A suffix array can be used to find the longest common prefix between two suffixes in O(log n) time.
// - A suffix array can be used to find the longest repeated substring in O(n) time.
// - A suffix array can be used to find the longest common substring between two strings in O(n log n) time.

function buildSuffixArray(text) {
  const n = text.length;
  const suffixes = [];

  // Generate all suffixes and their starting indices.
  for (let i = 0; i < n; i++) {
    suffixes.push({ index: i, suffix: text.slice(i) });
  }

  // Sort the suffixes lexicographically.
  suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

  // Extract the indices of the sorted suffixes.
  const suffixArray = suffixes.map((s) => s.index);
  return suffixArray;
}

// Example Usage
const text = "banana";
const suffixArray = buildSuffixArray(text);
console.log("Suffix Array:", suffixArray);

// Suffix Tree

// A Suffix Tree is a tree-like data structure that represents all the suffixes of a string and can be used for
// various string algorithms, such as pattern matching and substring search.

// Implementing a suffix tree from scratch is more complex. It's recommended to use existing libraries or algorithms
// to construct a suffix tree. Here's a simple example using the "suffix-tree" library available in Node.js:

// To install ---> npm install suffixtree

const SuffixTree = require("suffixtree");

const text2 = "banana";
const suffixTree = new SuffixTree(text2);

console.log("Suffix Tree (JSON):", JSON.stringify(suffixTree, null, 2));
