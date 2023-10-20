/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Two Pointers
// Time Complexity: O(n) - where n is the length of nums
// Space Complexity: O(n)
// Steps / Pseudocode:
// 1. Initialize two pointers, left and right to the start and end of the array respectively
// 2. Create an array of the same length as the input array
// 3. Loop through the array backwards
// 4. If the absolute value of the element at left is greater than the absolute value of the element at right, square the element at left and add it to the result array
// 5. Otherwise, square the element at right and add it to the result array
// 6. Return the result array

var sortedSquares = function (nums) {
  var result = Array(nums.length); // Create an array of the same length as the input array
  let left = 0;
  let right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};
// @lc code=end

// Brute Force
// Time Complexity: O(nlogn) - where n is the length of nums
// Space Complexity: O(n)
// Steps / Pseudocode:
// 1. Loop through the array and square each element
// 2. Sort the array
// 3. Return the array
// Note: We can also use a built-in sort function
var sortedSquares = function (nums) {
  var result = [];
  for (const value of nums) {
    result.push(value * value);
  }
  result.sort((a, b) => a - b); // This function has a time complexity of O(nlogn)
  return result;
};
