/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// Kadane's Algorithm (Dynamic Programming)
// Time Complexity: O(n log n)
// Space Complexity: O(log n)
var maxSubArray = function (nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    console.log(maxSoFar, maxEndingHere);
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    console.log(`New max: ${maxEndingHere}`);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
// @lc code=end

// Brute force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
};

// Divide and Conquer
// Time Complexity: O(n log n)
// Space Complexity: O(log n)
var maxSubArray = function (nums) {
  return maxSubArrayHelper(nums, 0, nums.length - 1);
};

const maxSubArrayHelper = (nums, left, right) => {
  console.log(left, right);
  if (left === right) return nums[left];
  const mid = Math.floor((left + right) / 2);
  const leftMax = maxSubArrayHelper(nums, left, mid);
  console.log(`Left max: ${leftMax}`);
  console.log(`Before right max: ${left} ${right}`);
  const rightMax = maxSubArrayHelper(nums, mid + 1, right);
  console.log(`Right max: ${rightMax}`);

  let leftBorderSum = -Infinity;
  let rightBorderSum = -Infinity;
  let sum = 0;

  for (let i = mid; i >= left; i--) {
    console.log("Left for loop");
    sum += nums[i];
    leftBorderSum = Math.max(leftBorderSum, sum);
  }

  sum = 0;
  for (let i = mid + 1; i <= right; i++) {
    console.log("Right for loop");
    sum += nums[i];
    rightBorderSum = Math.max(rightBorderSum, sum);
  }

  return Math.max(leftMax, rightMax, leftBorderSum + rightBorderSum);
};
