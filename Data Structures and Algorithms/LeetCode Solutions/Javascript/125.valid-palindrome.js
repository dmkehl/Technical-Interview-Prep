/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// SOLUTION 1: TWO POINTERS
// Time Complexity: O(n) - where n is the length of the string.
// Space Complexity: O(1) - constant space is used.

// Steps  /Pseudocode:
// Convert the string to lowercase to ignore cases.
// Use a regular expression to remove all non-alphanumeric characters.
// Initialize two pointers, one at the beginning and the other at the end of the string.
// Compare characters at both pointers while moving them towards each other.
// If there is a mismatch, return false. If the pointers meet, return true.

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end

// SOLUTION 2: USING ARRAY REVERSE METHOD
// Time Complexity: O(n) - where n is the length of the string.
// Space Complexity: O(n) - linear space is used to store the reversed string.
// The idea is similar to solution 1, but this solution combines the regex replacement and case conversion in one step.

// Steps / Pseudocode:
// Remove all non-alphanumeric characters using a regular expression.
// Convert the resulting string to lowercase to ignore cases.
// Use two pointers from the start and end of the string, comparing characters and moving towards the center.
// If a mismatch is found, return false. If the pointers meet, return true.

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = s.split("").reverse().join("");
  return s === reversed;
};
