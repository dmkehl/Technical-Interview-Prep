"""
Problem: Two Sum
Pattern: Hash Map
Difficulty: Easy

Description:
Given an array of integers nums and an integer target, return the indices
of the two numbers such that they add up to target.

Constraints:
- Exactly one solution exists in the original LeetCode problem.
- The same element cannot be used twice.

Core Idea:
The brute-force approach checks every pair, resulting in O(n^2) time.

A more efficient approach uses a hash map to store numbers we have already
seen along with their indices. For each number, we calculate the complement
needed to reach the target.

If the complement has already been seen, we have found the answer.

Example:
nums = [2, 7, 11, 15], target = 9

At index 0:
    num = 2
    complement = 7
    7 has not been seen yet, so store 2 -> 0

At index 1:
    num = 7
    complement = 2
    2 has been seen, so return [0, 1]

Time Complexity:
O(n), where n is the number of elements in nums.

Space Complexity:
O(n), because the hash map may store up to n elements.

Notes:
- The hash map stores previously seen values as keys and their indices as values.
- We check for the complement before storing the current number.
  This prevents using the same element twice.
- Overwriting seen[num] is acceptable for this problem because any valid pair is fine.
- If preserving the earliest index is desired, you can use:

    if num not in seen:
        seen[num] = i

  That avoids overwriting duplicate values, but it adds an extra lookup and is not
  necessary for the standard Two Sum problem.
"""

from typing import List


# =========================
# Solution Function
# =========================
def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Return the indices of two numbers that add up to the target.

    Args:
        nums: List of integers.
        target: Target sum.

    Returns:
        A list containing the two indices.

    Approach:
        Use a hash map to track numbers already seen.

        For each number:
        1. Calculate the complement needed to reach the target.
        2. Check whether that complement already exists in the hash map.
        3. If it does, return the stored index and the current index.
        4. Otherwise, store the current number and its index.

    Complexity:
        Time: O(n)
        Space: O(n)
    """
    seen = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in seen:
            return [seen[complement], i]

        seen[num] = i

    return []


# =========================
# Alternative Insert Option
# =========================
def two_sum_preserve_first_index(nums: List[int], target: int) -> List[int]:
    """
    Alternative version that preserves the first index of duplicate values.

    This is not required for the standard Two Sum problem, but it demonstrates
    an intentional design choice around duplicate handling.

    Tradeoff:
        - Preserves earlier indices for duplicates.
        - Adds an extra hash map lookup.
        - Usually unnecessary when any valid pair is acceptable.
    """
    seen = {}

    for i, num in enumerate(nums):
        complement = target - num

        if complement in seen:
            return [seen[complement], i]

        if num not in seen:
            seen[num] = i

    return []


# =========================
# Test Cases
# =========================
TEST_CASES = [
    {
        "name": "Basic case",
        "input": {"nums": [2, 7, 11, 15], "target": 9},
        "expected": [0, 1],
    },
    {
        "name": "Unordered input",
        "input": {"nums": [3, 2, 4], "target": 6},
        "expected": [1, 2],
    },
    {
        "name": "Duplicate values",
        "input": {"nums": [3, 3], "target": 6},
        "expected": [0, 1],
    },
    {
        "name": "Negative numbers",
        "input": {"nums": [-1, -2, -3, -4, -5], "target": -8},
        "expected": [2, 4],
    },
    {
        "name": "Zero target",
        "input": {"nums": [0, 4, 3, 0], "target": 0},
        "expected": [0, 3],
    },
]


# =========================
# Test Helpers
# =========================
def is_valid_result(nums: List[int], target: int, result: List[int]) -> bool:
    """
    Validate that the returned indices are correct.

    This is stronger than only comparing against an expected answer because
    some inputs may have multiple valid index pairs.
    """
    if not isinstance(result, list):
        return False

    if len(result) != 2:
        return False

    i, j = result

    if i == j:
        return False

    if not (0 <= i < len(nums)) or not (0 <= j < len(nums)):
        return False

    return nums[i] + nums[j] == target


# =========================
# Test Runner
# =========================
def run_tests() -> None:
    passed = 0

    for i, test in enumerate(TEST_CASES, start=1):
        nums = test["input"]["nums"]
        target = test["input"]["target"]

        try:
            result = two_sum(nums, target)
        except Exception as e:
            print(f"Test {i} ({test['name']}): ERROR")
            print(f"  Exception: {e}")
            continue

        if is_valid_result(nums, target, result):
            print(f"Test {i} ({test['name']}): PASS")
            passed += 1
        else:
            print(f"Test {i} ({test['name']}): FAIL")
            print(f"  Input: nums={nums}, target={target}")
            print(f"  Got: {result}")

    print(f"\nPassed {passed} / {len(TEST_CASES)} tests")


# =========================
# Entry Point
# =========================
if __name__ == "__main__":
    run_tests()