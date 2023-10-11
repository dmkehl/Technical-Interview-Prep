// Segment and Fenwick Trees

// Segment Tree

// Segment Trees are a data structure that allows answering range queries over an array effectively, while still
// being flexible enough to allow modifying the array. This includes finding the sum of consecutive array
// elements a[l…r], or finding the minimum element in a such a range in O(logn) time. Between answering such queries
// the Segment Tree allows modifying the array by replacing one element, or even change the elements of a whole subsegment
// (e.g. assigning all elements a[l…r] to any value, or adding a value to all element in the subsegment).

// How a segment tree works:
// - A segment tree is a binary tree.
// - The root of the tree represents the whole array.
// - Each leaf node represents an element of the array.
// - Each internal node represents the merge of the leaves that it covers (e.g., sum, minimum, maximum, etc.).

class SegmentTree {
  constructor(arr) {
    this.arr = arr;
    this.tree = new Array(4 * arr.length); // Size of the tree, generally 4 times the array size.
    this.build(0, 0, arr.length - 1);
  }

  // Build the segment tree.
  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      const left = 2 * node + 1;
      const right = 2 * node + 2;
      this.build(left, start, mid);
      this.build(right, mid + 1, end);
      this.tree[node] = this.tree[left] + this.tree[right]; // Merge operation (e.g., sum).
    }
  }

  // Update the value at index 'i' to 'val'.
  update(node, start, end, i, val) {
    if (start === end) {
      this.arr[i] = val;
      this.tree[node] = val;
    } else {
      const mid = Math.floor((start + end) / 2);
      const left = 2 * node + 1;
      const right = 2 * node + 2;

      if (i <= mid) {
        this.update(left, start, mid, i, val);
      } else {
        this.update(right, mid + 1, end, i, val);
      }

      this.tree[node] = this.tree[left] + this.tree[right]; // Merge operation.
    }
  }

  // Query the sum in the range [l, r].
  query(node, start, end, l, r) {
    if (r < start || end < l) {
      return 0; // Outside the range.
    }

    if (l <= start && end <= r) {
      return this.tree[node]; // Fully covered.
    }

    const mid = Math.floor((start + end) / 2);
    const left = 2 * node + 1;
    const right = 2 * node + 2;
    const leftSum = this.query(left, start, mid, l, r);
    const rightSum = this.query(right, mid + 1, end, l, r);

    return leftSum + rightSum; // Merge operation (e.g., sum).
  }
}

// Example Usage
const arr = [1, 3, 5, 7, 9, 11];
const segmentTree = new SegmentTree(arr);

segmentTree.update(2, 4); // Update index 2 to 4.
const sum2 = segmentTree.query(1, 4); // Query the sum in the range [1, 4].
console.log("Sum:", sum2); // 23

// Fenwick Tree

// Fenwick Trees are a data structure that allows answering range queries and modifying values in a table of numbers
// effectively. Compared to a flat array of numbers, Fenwick trees achieve a much better balance between two operations:
// Element update and prefix sum calculation. In a flat array of n numbers, you can either store the elements, or the
// prefix sums. In the first case, computing prefix sums requires linear time; in the second case, updating the array
// elements requires linear time (in both cases, the other operation can be performed in constant time). Fenwick trees
// allow both operations to be performed in O(logn) time. This is achieved by representing the numbers as a tree, where
// the value of each node is the sum of the numbers in that subtree. The tree structure allows operations to be
// performed using only O(logn) node accesses.

// How a Fenwick tree works:
// - A Fenwick tree is a binary tree.
// - The root of the tree represents the whole array.
// - Each leaf node represents an element of the array.
// - Each internal node represents the merge of the leaves that it covers (e.g., sum, minimum, maximum, etc.).
// - The tree supports point updates and range queries.

class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  // Update the value at index 'i' by 'delta'.
  update(i, delta) {
    i++; // Convert 0-based index to 1-based index.
    while (i < this.tree.length) {
      this.tree[i] += delta;
      i += i & -i; // Move to the parent node in the tree.
    }
  }

  // Get the prefix sum up to index 'i'.
  query(i) {
    i++; // Convert 0-based index to 1-based index.
    let sum = 0;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i; // Move to the parent node in the tree.
    }
    return sum;
  }
}

// Example Usage
const fenwickTree = new FenwickTree(6);

fenwickTree.update(2, 1); // Update index 2 by 1.
fenwickTree.update(4, 3); // Update index 4 by 3.

const sum = fenwickTree.query(4); // Query the sum up to index 4.
console.log("Sum:", sum); // 4
