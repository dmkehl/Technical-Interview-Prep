// JavaScript Intervals

// An interval represents a range of values. Intervals are commonly used in scheduling, time-based problems, and more.

// Intervals are represented by a start and end value. For example, the interval [1, 5] represents the values 1, 2, 3, 4, and 5.
// Intervals can be represented by a class or a tuple (an array with two elements).
// Intervals can be merged if they overlap. For example, the intervals [1, 5] and [3, 7] can be merged into [1, 7].
// Intervals can be checked for overlap. For example, the intervals [1, 5] and [3, 7] overlap, but the intervals [1, 5] and [9, 12] do not.
// Intervals can be checked if they are fully covered by another interval. For example, the interval [1, 5] is fully covered by the interval [3, 7], but the interval [1, 5] is not fully covered by the interval [9, 12].
// Intervals can be checked if they are fully covered by a list of intervals. For example, the interval [1, 5] is fully covered by the list of intervals [[1, 5], [3, 7], [6, 10], [9, 12]].
// However, the interval [1, 5] is not fully covered by the list of intervals [[1, 5], [6, 10], [9, 12]].

// How and when to use intervals:
// Intervals are commonly used in scheduling problems. For example, you can use intervals to represent the start and end times of meetings.

// Interval Structure
class Interval {
  constructor(start, end) {
    this.start = start; // Start of the interval.
    this.end = end; // End of the interval.
  }
}

// Example Intervals
const interval1 = new Interval(1, 5);
const interval2 = new Interval(3, 7);
const interval3 = new Interval(6, 10);
const interval4 = new Interval(9, 12);

// Merging Intervals
function mergeIntervals(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a.start - b.start);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    if (current.start <= lastMerged.end) {
      // Intervals overlap; merge them.
      lastMerged.end = Math.max(lastMerged.end, current.end);
    } else {
      // Intervals don't overlap; add the current interval to the merged list.
      merged.push(current);
    }
  }

  return merged;
}

// Example Usage
const intervalsToMerge = [interval1, interval2, interval3, interval4];
const mergedIntervals = mergeIntervals(intervalsToMerge);
console.log("Merged Intervals:", mergedIntervals);

// Checking if Two Intervals Overlap
function isOverlap(interval1, interval2) {
  return interval1.end >= interval2.start && interval2.end >= interval1.start;
}

// Example Usage
const overlap1 = isOverlap(interval1, interval2); // Should return true.
const overlap2 = isOverlap(interval1, interval4); // Should return false.
console.log("Overlap Check 1:", overlap1);
console.log("Overlap Check 2:", overlap2);

// Checking if an Interval is Fully Covered
function isFullyCovered(coverInterval, targetInterval) {
  return (
    coverInterval.start <= targetInterval.start &&
    coverInterval.end >= targetInterval.end
  );
}

// Example Usage
const fullyCovered1 = isFullyCovered(interval1, interval2); // Should return false.
const fullyCovered2 = isFullyCovered(interval1, interval4); // Should return true.
console.log("Fully Covered Check 1:", fullyCovered1);
console.log("Fully Covered Check 2:", fullyCovered2);
