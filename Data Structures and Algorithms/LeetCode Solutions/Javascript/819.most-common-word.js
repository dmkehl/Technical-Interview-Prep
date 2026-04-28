/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
// Hashmap solution
// Time Complexity O(n) where n is the number of words in the paragraph
// Space Complexity O(n) where n is the number of words in the paragraph
// Steps / pseudocode:
// 1. Create a hashmap to store the count of each word
// 2. Split the paragraph into words i.e. remove spaces and punctuations also word cant be blank
// 3. Loop through the words and update the count in the hashmap
// 4. If the word is in the banned array then skip it
// 5. If the word is not in the hashmap then add it with count 1
// 6. If the word is in the hashmap then increment the count
// 7. Also keep track of the current highest word
// 8. Return the current highest word

var mostCommonWord = function (paragraph, banned) {
  let currentHighWord = "";
  const words = { [currentHighWord]: 0 };
  // split the paragraph into words i.e. remove spaces and punctuations also word cant be blank
  const wordArr = paragraph
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 0);
  for (const word of wordArr) {
    if (!banned.includes(word)) {
      updateCount(word, words);
      if (words[word] > words[currentHighWord]) currentHighWord = word;
    }
  }
  console.log(words);
  return currentHighWord;
};

function updateCount(word, words) {
  if (!(word in words)) words[word] = 0;
  words[word] += 1;
}
// @lc code=end
