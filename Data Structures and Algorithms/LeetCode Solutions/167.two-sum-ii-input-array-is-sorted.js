// --------------------------- BAD SOLUTION---------------------------
// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Steps / Pseudocode:
// 1. Loop through the array
// 2. For each element, loop through the rest of the array
// 3. If the sum of the two elements is equal to the target, return the indices
// 4. If not, continue looping
// 5. If no sum is found, return null
// 6. Return the indices
// Note: The array is sorted, so we can use two pointers

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

// Steps / Pseudocode:
// 1. Initialize two pointers, left and right to the start and end of the array respectively
// 2. While left is less than right
// 3. If the sum of the two elements is equal to the target, return the indices
// 4. If the sum is less than the target, increment left
// 5. If the sum is greater than the target, decrement right
// 6. If no sum is found, return null
// 7. Return the indices
// Note: The array is sorted, so we can use two pointers
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

// Steps / Pseudocode:
// 1. Initialize a hash map
// 2. Loop through the array
// 3. For each element, calculate the remainder (target - current element)
// 4. If the map contains the remainder, return the indices
// 5. If not, add the current element to the map
// 6. If no sum is found, return null
// 7. Return the indices

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
