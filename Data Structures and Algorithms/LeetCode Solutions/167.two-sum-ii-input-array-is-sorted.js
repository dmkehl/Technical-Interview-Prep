// --------------------------- BAD SOLUTION---------------------------
// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
};

// --------------------------- BETTER SOLUTION---------------------------
// Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currSum = numbers[left] + numbers[right];
    if (currSum === target) {
      return [left + 1, right + 1];
    } else if (currSum < target) {
      left++;
    } else {
      right--;
    }
  }
};

// --------------------------- BEST SOLUTION---------------------------

// Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function (numbers, target) {
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const remainder = target - numbers[i];
    if (numMap.has(remainder)) {
      return [numMap.get(remainder) + 1, i + 1];
    }
    numMap.set(numbers[i], i);
  }
};
