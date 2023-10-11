<a id="top"></a>

# Technical Interview Prep

This repository is designed to be a guide to help you learn the design patterns that are used to solve
leetcode style questions in technical interviews. This repository will include links to explain the concepts as well as links
to leetcode questions that can be used to practice the concepts discussed. I hope you find it useful.

## Table of Contents

1. [**Two Pointers Pattern**](#two-pointer-pattern)

   - [Pointers at Both Ends](#pointers-at-both-ends)
   - [Slow & Fast Pointers](#slow-and-fast-pointers)
   - [Merging Two Arrays](#merging-two-arrays)
   - [Divide & Conquer](#divide-and-conquer)

2. [**Fast & Slow Pointers Pattern**](#fast--slow-pointers-pattern)

   - [Linked List Cycle](#linked-list-cycle)
   - [Palindromic Linked List](#palindromic-linked-list)
   - [Cycle in a Circular Array](#cycle-in-a-circular-array)

3. [**Merge Intervals Pattern**](#merge-intervals-pattern)

4. [**Cyclic Sort Pattern**](#cyclic-sort-pattern)

5. [**Binary Search Pattern**](#binary-search-pattern)

6. [**Depth-First Search (DFS)**](#depth-first-search)

7. [**Breadth-First Search (BFS)**](#breadth-first-search)

8. [**Two Heaps Pattern**](#two-heaps-pattern)

9. [**Subsets Pattern**](#subsets-pattern)

10. [**Modified Binary Search Pattern**](#modified-binary-search-pattern)

11. [**Top 'K' Elements Pattern**](#top-k-elements-pattern)

12. [**K-Way Merge Pattern**](#k-way-merge-pattern)

13. [**Trie (Prefix Tree) Pattern**](#trie-pattern)

14. [**Dynamic Programming Pattern**](#dynamic-programming-pattern)

15. [**Topological Sort Pattern**](#topological-sort-pattern)

<a id="two-pointer-pattern"></a>

## Two Pointer Pattern

[🔼 Back to top](#top)

<a id="pointers-at-both-ends"></a>

### Pointers at Both Ends

| Problem                                                                                                                                                   | Difficulty |                            Solution                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :-------------------------------------------------------------: |
| [Two Sum II - Input Array is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)                                                     |    Easy    | [Solution](./Solutions/167.two-sum-ii-input-array-is-sorted.js) |
| [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)                                                                   |    Easy    |
| [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                                                                                       |    Easy    |
| [Reverse String](https://leetcode.com/problems/reverse-string/)                                                                                           |    Easy    |
| [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)                                                                                 |    Easy    |
| [Remove Element](https://leetcode.com/problems/remove-element/)                                                                                           |    Easy    |
| [DI String Match](https://leetcode.com/problems/di-string-match/)                                                                                         |    Easy    |
| [Minimum Length of String After Deleting Similar Ends](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/)               |    Easy    |
| [Sentence Similarity III](https://leetcode.com/problems/sentence-similarity-iii/)                                                                         |    Easy    |
| [Shortest Distance to a Character](https://leetcode.com/problems/shortest-distance-to-a-character/)                                                       |    Easy    |
| [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)                                                                     |    Easy    |
| [Reverse Only Letters](https://leetcode.com/problems/reverse-only-letters/)                                                                               |    Easy    |
| [Sort Colors](https://leetcode.com/problems/sort-colors/)                                                                                                 |   Medium   |
| [Flipping an Image](https://leetcode.com/problems/flipping-an-image/)                                                                                     |   Medium   |
| [Sort Array by Parity](https://leetcode.com/problems/sort-array-by-parity/)                                                                               |   Medium   |
| [Sort Array by Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/)                                                                         |   Medium   |
| [Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word/)                                                                           |   Medium   |
| [Reverse String II](https://leetcode.com/problems/reverse-string-ii/)                                                                                     |   Medium   |
| [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)                                                                     |   Medium   |
| [Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/)                                                             |   Medium   |
| [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)                                                                         |   Medium   |
| [Next Permutation](https://leetcode.com/problems/next-permutation/)                                                                                       |   Medium   |
| [Next Greater Element III](https://leetcode.com/problems/next-greater-element-iii/)                                                                       |   Medium   |
| [Pancake Sorting](https://leetcode.com/problems/pancake-sorting/)                                                                                         |   Medium   |
| [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/)                                                                                             |   Medium   |
| [Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/)                                                                             |   Medium   |
| [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)                                                                               |   Medium   |
| [Minimize Maximum Pair Sum in Array](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)                                                   |   Medium   |
| [3Sum](https://leetcode.com/problems/3sum/)                                                                                                               |   Medium   |
| [4Sum](https://leetcode.com/problems/4sum/)                                                                                                               |   Medium   |
| [Number of Subsequences That Satisfy the Given Sum Condition](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/) |   Medium   |
| [3Sum With Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/)                                                                           |   Medium   |
| [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)                                                                     |   Medium   |
| [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)                                                                                 |    Hard    |

<a id="slow-and-fast-pointers"></a>

### Slow & Fast Pointers

| Problem                                                                                                                                     | Difficulty |
| ------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)                                                                       |    Easy    |
| [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)                                                             |    Easy    |
| [Count Binary Substrings](https://leetcode.com/problems/count-binary-substrings/)                                                           |    Easy    |
| [K-diff Pairs in an Array](https://leetcode.com/problems/k-diff-pairs-in-an-array/)                                                         |    Easy    |
| [Rotate Array](https://leetcode.com/problems/rotate-array/)                                                                                 |    Easy    |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)                                   |    Easy    |
| [Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)                                                                           |    Easy    |
| [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)                                                                 |   Medium   |
| [Remove Nth Node from End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)                                         |   Medium   |
| [Rotate List](https://leetcode.com/problems/rotate-list/)                                                                                   |   Medium   |
| [Reorder List](https://leetcode.com/problems/reorder-list/)                                                                                 |   Medium   |
| [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)                                                       |   Medium   |
| [Circular Array Loop](https://leetcode.com/problems/circular-array-loop/)                                                                   |   Medium   |
| [Number of Subarrays with Bounded Maximum](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/)                         |   Medium   |
| [Moving Stones Until Consecutive II](https://leetcode.com/problems/moving-stones-until-consecutive-ii/)                                     |   Medium   |
| [Count Pairs of Nodes](https://leetcode.com/problems/count-pairs-of-nodes/)                                                                 |   Medium   |
| [Rotating the Box](https://leetcode.com/problems/rotating-the-box/)                                                                         |   Medium   |
| [String Compression](https://leetcode.com/problems/string-compression/)                                                                     |   Medium   |
| [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)                             |   Medium   |
| [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)                               |   Medium   |
| [Statistics from a Large Sample](https://leetcode.com/problems/statistics-from-a-large-sample/)                                             |   Medium   |
| [Partition Labels](https://leetcode.com/problems/partition-labels/)                                                                         |   Medium   |
| [Magical String](https://leetcode.com/problems/magical-string/)                                                                             |   Medium   |
| [Friends of Appropriate Ages](https://leetcode.com/problems/friends-of-appropriate-ages/)                                                   |   Medium   |
| [Longest Mountain in Array](https://leetcode.com/problems/longest-mountain-in-array/)                                                       |   Medium   |
| [Shortest Subarray to Be Removed to Make Array Sorted](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/) |   Medium   |
| [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)                                         |    Hard    |
| [Last Substring in Lexicographical Order](https://leetcode.com/problems/last-substring-in-lexicographical-order/)                           |    Hard    |

<a id="merging-two-arrays"></a>

### Merging Two Arrays

| Problem                                                                                                                                                 | Difficulty |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)                                                                                 |    Easy    |
| [Find the Distance Value Between Two Arrays](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)                                 |    Easy    |
| [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)                                                     |    Easy    |
| [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)                                                                 |    Easy    |
| [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)                                                           |    Easy    |
| [Implement strStr()](https://leetcode.com/problems/implement-strstr/)                                                                                   |    Easy    |
| [Long-Pressed Name](https://leetcode.com/problems/long-pressed-name/)                                                                                   |    Easy    |
| [Longest Uncommon Subsequence II](https://leetcode.com/problems/longest-uncommon-subsequence-ii/)                                                       |    Easy    |
| [Heaters](https://leetcode.com/problems/heaters/)                                                                                                       |   Medium   |
| [Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)                               |   Medium   |
| [Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/)                                                                       |   Medium   |
| [Camelcase Matching](https://leetcode.com/problems/camelcase-matching/)                                                                                 |   Medium   |
| [Expressive Words](https://leetcode.com/problems/expressive-words/)                                                                                     |   Medium   |
| [Partition Array into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/) |   Medium   |
| [3Sum Closest](https://leetcode.com/problems/3sum-closest/)                                                                                             |   Medium   |
| [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)                                                                           |   Medium   |
| [Shortest Unsorted Continuous Subarray](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)                                           |   Medium   |
| [Most Profit Assigning Work](https://leetcode.com/problems/most-profit-assigning-work/)                                                                 |   Medium   |
| [Swap Adjacent in LR String](https://leetcode.com/problems/swap-adjacent-in-lr-string/)                                                                 |   Medium   |
| [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)                                                             |    Hard    |
| [Closest Subsequence Sum](https://leetcode.com/problems/closest-subsequence-sum/)                                                                       |    Hard    |
| [Ways to Split Array into Three Subarrays](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/)                                     |    Hard    |
| [Largest Merge of Two Strings](https://leetcode.com/problems/largest-merge-of-two-strings/)                                                             |    Hard    |

<a id="divide-and-conquer"></a>

### Divide & Conquer

| Problem                                                         | Difficulty |
| --------------------------------------------------------------- | :--------: |
| [Partition List](https://leetcode.com/problems/partition-list/) |   Medium   |
| [Sort List](https://leetcode.com/problems/sort-list/)           |   Medium   |

<a id="merge-intervals-pattern"></a>

## Merge Intervals Pattern

[🔼 Back to top](#top)

| Problem                                                                                   | Difficulty |
| ----------------------------------------------------------------------------------------- | :--------: |
| [Merge Intervals](https://leetcode.com/problems/merge-intervals/)                         |   Medium   |
| [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/) |   Medium   |
| [Insert Interval](https://leetcode.com/problems/insert-interval/)                         |    Hard    |

<a id="cyclic-sort-pattern"></a>

## Cyclic Sort Pattern

[🔼 Back to top](#top)

| Problem                                                                                           | Difficulty |
| ------------------------------------------------------------------------------------------------- | :--------: |
| [Find the Missing Number](https://leetcode.com/problems/missing-number/)                          |    Easy    |
| [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)             |   Medium   |
| [Cyclic Sort](https://leetcode.com/problems/find-all-duplicates-in-an-array/)                     |   Medium   |
| [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |   Medium   |
| [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)                   |    Hard    |

<a id="binary-search-pattern"></a>

## Binary Search Pattern

[🔼 Back to top](#top)

| Problem                                                                                                                                           | Difficulty |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Binary Search](https://leetcode.com/problems/binary-search/)                                                                                     |    Easy    |
| [Search Insert Position](https://leetcode.com/problems/search-insert-position/)                                                                   |    Easy    |
| [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |   Medium   |
| [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)                                                   |   Medium   |
| [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)                                             |   Medium   |
| [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)                                                                           |   Medium   |
| [Search in Sorted Array of Unknown Size](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/)                                 |   Medium   |
| [Search for a Range](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)                                      |   Medium   |
| [Find Peak Element](https://leetcode.com/problems/find-peak-element/)                                                                             |   Medium   |
| [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)                                       |   Medium   |
| [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)                                 |    Hard    |

<a id="depth-first-search"></a>

## Depth First Search (DFS)

[🔼 Back to top](#top)

| Problem                                                                                           | Difficulty |
| ------------------------------------------------------------------------------------------------- | :--------: |
| [Island Perimeter](https://leetcode.com/problems/island-perimeter/)                               |    Easy    |
| [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)                           |   Medium   |
| [Number of Islands](https://leetcode.com/problems/number-of-islands/)                             |   Medium   |
| [Word Search](https://leetcode.com/problems/word-search/)                                         |   Medium   |
| [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)                           |   Medium   |
| [Course Schedule](https://leetcode.com/problems/course-schedule/)                                 |   Medium   |
| [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)                           |   Medium   |
| [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)         |   Medium   |
| [All Paths from Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/) |   Medium   |
| [Word Search II](https://leetcode.com/problems/word-search-ii/)                                   |    Hard    |

<a id="breadth-first-search"></a>

## Breadth First Search (BFS)

[🔼 Back to top](#top)

| Problem                                                                                               | Difficulty |
| ----------------------------------------------------------------------------------------------------- | :--------: |
| [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)           |    Easy    |
| [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) |   Medium   |
| [Course Schedule](https://leetcode.com/problems/course-schedule/)                                     |   Medium   |
| [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)                               |   Medium   |
| [Clone Graph](https://leetcode.com/problems/clone-graph/)                                             |   Medium   |
| [Word Ladder](https://leetcode.com/problems/word-ladder/)                                             |   Medium   |
| [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)             |   Medium   |
| [Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)       |   Medium   |
| [Number of Islands](https://leetcode.com/problems/number-of-islands/)                                 |   Medium   |
| [Word Ladder II](https://leetcode.com/problems/word-ladder-ii/)                                       |    Hard    |
| [Jump Game IV](https://leetcode.com/problems/jump-game-iv/)                                           |    Hard    |

<a id="two-heaps-pattern"></a>

## Two Heaps Pattern

[🔼 Back to top](#top)

| Problem                                                                                            | Difficulty |
| -------------------------------------------------------------------------------------------------- | :--------: |
| [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)  |    Easy    |
| [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)        |    Hard    |
| [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)                      |    Hard    |
| [Find the Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) |    Hard    |
| [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)                        |    Hard    |

<a id="subsets-pattern"></a>

## Subsets Pattern

[🔼 Back to top](#top)

| Problem                                                                                                       | Difficulty |
| ------------------------------------------------------------------------------------------------------------- | :--------: |
| [Subsets](https://leetcode.com/problems/subsets/)                                                             |   Medium   |
| [Subsets II](https://leetcode.com/problems/subsets-ii/)                                                       |   Medium   |
| [Permutations](https://leetcode.com/problems/permutations/)                                                   |   Medium   |
| [Permutations II](https://leetcode.com/problems/permutations-ii/)                                             |   Medium   |
| [Combinations](https://leetcode.com/problems/combinations/)                                                   |   Medium   |
| [Subsets with Duplicates](https://leetcode.com/problems/subsets-ii/)                                          |   Medium   |
| [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)                                   |   Medium   |
| [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) |   Medium   |
| [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)                             |   Medium   |
| [String Permutations by Changing Case](https://leetcode.com/problems/letter-case-permutation/)                |   Medium   |
| [Combination Sum](https://leetcode.com/problems/combination-sum/)                                             |   Medium   |
| [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)                                       |   Medium   |

<a id="modified-binary-search-pattern"></a>

## Modified Binary Search Pattern

[🔼 Back to top](#top)

| Problem                                                                                                                                           | Difficulty |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Search Insert Position](https://leetcode.com/problems/search-insert-position/)                                                                   |    Easy    |
| [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)                                                   |   Medium   |
| [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)                                             |   Medium   |
| [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)                                       |   Medium   |
| [Find Peak Element](https://leetcode.com/problems/find-peak-element/)                                                                             |   Medium   |
| [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) |   Medium   |
| [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)                                                                           |   Medium   |
| [Search in Sorted Array of Unknown Size](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/)                                 |   Medium   |
| [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)                                 |    Hard    |

<a id="top-k-elements-pattern"></a>

## Top 'K' Elements Pattern

[🔼 Back to top](#top)

| Problem                                                                                                            | Difficulty |
| ------------------------------------------------------------------------------------------------------------------ | :--------: |
| [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)                  |    Easy    |
| [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)  |   Medium   |
| [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)                                  |   Medium   |
| [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)                  |   Medium   |
| [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)                            |   Medium   |
| [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)                        |   Medium   |
| [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)                                        |   Medium   |
| [Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/find-kth-smallest-number-in-m-sorted-lists/) |    Hard    |
| [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)                        |    Hard    |
| [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)                                      |    Hard    |

<a id="k-way-merge-pattern"></a>

## K-Way Merge Pattern

[🔼 Back to top](#top)

| Problem                                                                                                                       | Difficulty |
| ----------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Merge Sorted Arrays](https://leetcode.com/problems/merge-sorted-array/)                                                      |    Easy    |
| [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)             |   Medium   |
| [Merge Intervals](https://leetcode.com/problems/merge-intervals/)                                                             |   Medium   |
| [Merge Triplets to Form Target Triplet](https://leetcode.com/problems/count-of-pairs-with-xor-in-a-range/)                    |   Medium   |
| [Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)                                                   |    Hard    |
| [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)                         |    Hard    |
| [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |    Hard    |
| [The Skyline Problem](https://leetcode.com/problems/the-skyline-problem/)                                                     |    Hard    |
| [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)                                                   |    Hard    |
| [Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)         |    Hard    |

<a id="trie-pattern"></a>

## Trie (Prefix Tree) Pattern

[🔼 Back to top](#top)

| Problem                                                                                                                 | Difficulty |
| ----------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)                               |   Medium   |
| [Add and Search Word - Data Structure Design](https://leetcode.com/problems/add-and-search-word-data-structure-design/) |   Medium   |
| [Word Search](https://leetcode.com/problems/word-search/)                                                               |   Medium   |
| [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)                                 |   Medium   |
| [Replace Words](https://leetcode.com/problems/replace-words/)                                                           |   Medium   |
| [Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)                                                           |   Medium   |
| [Implement Magic Dictionary](https://leetcode.com/problems/implement-magic-dictionary/)                                 |   Medium   |
| [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)                                             |    Hard    |
| [Word Search II](https://leetcode.com/problems/word-search-ii/)                                                         |    Hard    |
| [Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)                   |    Hard    |

<a id="dynamic-programming-pattern"></a>

## Dynamic Programming Pattern

[🔼 Back to top](#top)

| Problem                                                                                           | Difficulty |
| ------------------------------------------------------------------------------------------------- | :--------: |
| [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)                                 |    Easy    |
| [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)                               |    Easy    |
| [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)                               |    Easy    |
| [House Robber](https://leetcode.com/problems/house-robber/)                                       |    Easy    |
| [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |    Easy    |
| [Coin Change](https://leetcode.com/problems/coin-change/)                                         |   Medium   |
| [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)   |   Medium   |
| [Unique Paths](https://leetcode.com/problems/unique-paths/)                                       |   Medium   |
| [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/) |   Medium   |
| [Knapsack Problem](https://leetcode.com/problems/coin-change-2/)                                  |   Medium   |
| [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)           |   Medium   |
| [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)               |   Medium   |
| [Word Break](https://leetcode.com/problems/word-break/)                                           |   Medium   |
| [Decode Ways](https://leetcode.com/problems/decode-ways/)                                         |   Medium   |
| [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)                               |   Medium   |
| [Coin Change 2](https://leetcode.com/problems/coin-change-2/)                                     |   Medium   |
| [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)         |    Hard    |
| [Edit Distance](https://leetcode.com/problems/edit-distance/)                                     |    Hard    |
| [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)                             |    Hard    |
| [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)           |    Hard    |

<a id="topological-sort-pattern"></a>

## Topological Sort Pattern

[🔼 Back to top](#top)

| Problem                                                                                                                                                                                   | Difficulty |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: |
| [Course Schedule](https://leetcode.com/problems/course-schedule/)                                                                                                                         |   Medium   |
| [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)                                                                                                                   |   Medium   |
| [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)                                                                                                               |   Medium   |
| [Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)                                                                                                         |   Medium   |
| [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)                                                                                                             |   Medium   |
| [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)                                                                                 |   Medium   |
| [Find the City With the Smallest Number of Neighbors at a Threshold Distance](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) |   Medium   |
| [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)                                                                                                                       |    Hard    |
| [Minimum Semesters to Finish Courses](https://leetcode.com/problems/parallel-courses-ii/)                                                                                                 |    Hard    |
| [Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)                                                               |    Hard    |
