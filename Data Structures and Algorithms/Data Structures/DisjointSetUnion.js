// JavaScript Disjoint Set Union (Union-Find)

// Disjoint Set Union (also known as Union-Find) is a data structure used to efficiently support two main
// operations: union (combining two sets into one) and find (determining which set a particular element belongs to).
// It's often used for solving connectivity problems.
// Disjoint Set Union is used in many areas including:
// - Kruskal's Algorithm (Minimum Spanning Tree)
// - Image Processing
// - Image Segmentation
// - Computer Vision
// - Computer Networks
// - Artificial Intelligence
// - Machine Learning
// - Natural Language Processing
// - Data Analytics
// - Data Clustering
// - Data Compression

class DisjointSetUnion {
  constructor(size) {
    // Initialize the data structure with 'size' sets.
    this.parent = new Array(size);
    this.rank = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i; // Each element is initially its own parent.
      this.rank[i] = 0; // Initialize the rank to 0.
    }
  }

  find(x) {
    // Find the representative (root) of the set to which 'x' belongs.
    if (this.parent[x] !== x) {
      // If 'x' is not its own parent, recursively find the representative.
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    // Union the sets to which 'x' and 'y' belong.
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        // Attach the shorter tree (rootY) to the taller tree (rootX).
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        // Attach the shorter tree (rootX) to the taller tree (rootY).
        this.parent[rootX] = rootY;
      } else {
        // If the ranks are equal, attach one tree to the other and increase its rank.
        this.parent[rootX] = rootY;
        this.rank[rootY]++;
      }
    }
  }
}

// Example Usage
const dsu = new DisjointSetUnion(5);

dsu.union(0, 1); // Union the sets containing 0 and 1.
dsu.union(2, 3); // Union the sets containing 2 and 3.

console.log("Are 0 and 1 in the same set?", dsu.find(0) === dsu.find(1)); // true
console.log("Are 0 and 2 in the same set?", dsu.find(0) === dsu.find(2)); // false
