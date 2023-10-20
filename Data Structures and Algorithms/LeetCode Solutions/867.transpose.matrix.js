/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// Time Complexity: O(R * C), where R and C are the number of rows and columns in the given matrix A
// Space Complexity: O(R * C), the space used by the answer
// Stesp / Psuedocode:
// 1. Initialize a variable called result to an empty array
// 2. Iterate through the columns of matrix A
// 3. For each column in matrix A, we iterate through the rows to create a new row in the result
// 4. Return the result

var transpose = function (matrix) {
  const result = [];

  for (let col = 0; col < matrix[0].length; col++) {
    const newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
};
// @lc code=end
