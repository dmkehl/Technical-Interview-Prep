/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Two Pointers
// Time Complexity: O(n + m) - where n and m are the lengths of s and t respectively
// Space Complexity: O(1)
// Steps / pseudocode:
// 1. Use two pointers to iterate over s and t
// 2. If the current character in t matches the current character in s, move both pointers forward
// 3. Otherwise, only move the pointer for t forward
// 4. Return whether all characters in s were matched

var isSubsequence = function (s, t) {
  let i = 0;
  for (const char of t) {
    if (i === s.length) break;
    if (char === s[i]) i++;
  }
  return i === s.length;
};
// @lc code=end
