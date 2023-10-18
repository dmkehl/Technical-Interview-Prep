// Problem: Reverse a String

/**
 * Good Solution:
 * Reverse a string using the split() and join() methods.
 *
 * @param {string} s - The input string.
 * @returns {string} - The reversed string.
 */
function reverseStringGood(s) {
  // If the input string is empty or null, return it as it is.
  if (!s) return s;

  // Split the string into an array of characters, reverse it, and join it back to form a string.
  return s.split("").reverse().join("");
}

/**
 * Better Solution:
 * Reverse a string using a two-pointer approach.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Steps / Pseudocode:
 * 1. If the input string is empty or null, return it as it is.
 * 2. Convert the string into an array of characters.
 * 3. Initialize two pointers, left and right to the start and end of the array respectively.
 * 4. Swap characters from the left and right pointers until they meet in the middle.
 * 5. Join the reversed array to form the reversed string.
 * 6. Return the reversed string.
 *
 * @param {string} s - The input string.
 * @returns {string} - The reversed string.
 */
function reverseStringBetter(s) {
  if (!s) return s;

  // Convert the string into an array of characters.
  const strArray = s.split("");
  let left = 0;
  let right = strArray.length - 1;

  // Swap characters from the left and right pointers until they meet in the middle.
  while (left < right) {
    [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
    left++;
    right--;
  }

  // Join the reversed array to form the reversed string.
  return strArray.join("");
}

/**
 * Best Solution:
 * Reverse a string in-place.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Steps / Pseudocode:
 * 1. If the input string is empty or null, return it as it is.
 * 2. Convert the string into an array of characters.
 * 3. Initialize two pointers, left and right to the start and end of the array respectively.
 * 4. Swap characters from the left and right pointers in-place until they meet in the middle.
 * 5. Join the reversed array to form the reversed string.
 * 6. Return the reversed string.
 *
 * @param {string} s - The input string.
 * @returns {string} - The reversed string.
 */
function reverseStringBest(s) {
  if (!s) return s;

  // Convert the string into an array of characters.
  const strArray = s.split("");
  let left = 0;
  let right = strArray.length - 1;

  // Swap characters from the left and right pointers in-place until they meet in the middle.
  while (left < right) {
    const temp = strArray[left];
    strArray[left] = strArray[right];
    strArray[right] = temp;
    left++;
    right--;
  }

  // Join the reversed array to form the reversed string.
  return strArray.join("");
}

// Example usage:
const input = "Hello, World!";

console.log("Good Solution:", reverseStringGood(input));
console.log("Better Solution:", reverseStringBetter(input));
console.log("Best Solution:", reverseStringBest(input));
