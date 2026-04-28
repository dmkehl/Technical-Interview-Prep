"""
Problem: Two Sum

Given an array of integers `nums` and an integer `target`, return the indices
of the two numbers such that they add up to target.

Constraints:
- Exactly one valid solution exists.
- You may not use the same element twice.
- Return indices in any order.

---

Approach:
We use a hash map to store previously seen values and their indices.

For each element `x`, we check if `target - x` has already been seen.
If yes, we found the pair in O(1) time.

---

Time Complexity:
O(n) — single pass

Space Complexity:
O(n) — hash map storage

---

Tradeoffs:
- Uses extra memory for O(1) lookup.
- Alternative (sorting + two pointers) reduces space but increases time complexity
  and loses original indices unless tracked separately.

---

Edge Cases Considered:
- Negative numbers
- Duplicate values
- Target achieved using same value at different indices
- Minimal input size (2 elements)

---

Example:
nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
"""

from typing import List, Dict


def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Returns indices of the two numbers that add up to target.

    Raises:
        ValueError: If no solution exists (defensive programming).
    """
    seen: Dict[int, int] = {}

    for i, value in enumerate(nums):
        complement = target - value

        if complement in seen:
            return [seen[complement], i]

        # Store after check to avoid using same element twice
        seen[value] = i

    # Defensive fallback (problem guarantees a solution, but good practice)
    raise ValueError("No valid two sum solution found.")


# -------------------------------
# Alternative Implementation
# -------------------------------

def two_sum_sorted(nums: List[int], target: int) -> List[int]:
    """
    Two-pointer approach after sorting.

    Notes:
    - Requires tracking original indices.
    - Slightly worse time complexity: O(n log n)
    - Useful when memory is constrained.

    Returns:
        List[int]: Original indices of the two numbers.
    """
    indexed_nums = sorted(enumerate(nums), key=lambda x: x[1])

    left, right = 0, len(nums) - 1

    while left < right:
        current_sum = indexed_nums[left][1] + indexed_nums[right][1]

        if current_sum == target:
            return [indexed_nums[left][0], indexed_nums[right][0]]
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    raise ValueError("No valid two sum solution found.")


# -------------------------------
# Test Cases (Simple Validation)
# -------------------------------

def _run_tests():
    test_cases = [
        ([2, 7, 11, 15], 9, {0, 1}),
        ([3, 2, 4], 6, {1, 2}),
        ([3, 3], 6, {0, 1}),
        ([-1, -2, -3, -4, -5], -8, {2, 4}),
    ]

    for nums, target, expected in test_cases:
        result = set(two_sum(nums, target))
        assert result == expected, f"Failed for input {nums}, {target}"

    print("All tests passed.")


if __name__ == "__main__":
    _run_tests()