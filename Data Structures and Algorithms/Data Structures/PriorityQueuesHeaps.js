// Javascript Priority Queues and Heaps

// Priority Queues
// A priority queue is a data structure that stores elements with priorities.
// Elements with higher priorities are served before elements with lower priorities.
// Priority queues are used in many areas including:
// - Graph Algorithms
// - Dijkstra's Algorithm (Shortest Path)
// - Prim's Algorithm (Minimum Spanning Tree)
// - Huffman Coding (Data Compression)

// How a priority queue works:
// - A priority queue is made up of a heap.
// - A heap is a binary tree with the following properties:
//   - The tree is complete (all levels are filled except possibly the last level).
//   - All nodes are either greater than or equal to (max heap) or less than or equal to (min heap) each of its children.
// - The root of the heap is the element with the highest priority.
// - Priority queues can be implemented with arrays or linked lists, but heaps are more efficient.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper function to get the parent index of a node.
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the left child index of a node.
  leftChild(index) {
    return 2 * index + 1;
  }

  // Helper function to get the right child index of a node.
  rightChild(index) {
    return 2 * index + 2;
  }

  // Helper function to swap two elements in the heap.
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Insert an element with a priority into the priority queue.
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Move the element at the given index up to its correct position in the heap.
  bubbleUp(index) {
    while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // Remove and return the element with the highest priority from the priority queue.
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);

    return min;
  }

  // Move the element at the given index down to its correct position in the heap.
  heapify(index) {
    const left = this.leftChild(index);
    const right = this.rightChild(index);
    let smallest = index;

    if (left < this.heap.length && this.heap[left] < this.heap[index]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapify(smallest);
    }
  }

  // Peek at the element with the highest priority without removing it.
  peek() {
    return this.heap[0];
  }

  // Get the size of the priority queue.
  size() {
    return this.heap.length;
  }
}

// Example Usage
const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(12);

console.log("Extracted Minimum Value from Min Heap:", minHeap.extractMin()); // 5
