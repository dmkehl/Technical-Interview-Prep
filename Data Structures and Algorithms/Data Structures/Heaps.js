// JavaScript Heaps

// A heap is a specialized tree-based data structure used for various applications, such as
// priority queues and graph algorithms. There are different types of heaps, including Min Heap,
// Max Heap, Binary Heap, and Fibonacci Heap.

// Min Heap:

// How a min heap works:
// - The root node is the smallest element in the heap.
// - The parent node is smaller than or equal to its child nodes.
// - The left child node is filled first.
// - The heap is a complete binary tree, meaning that all levels of the tree are fully filled
//   except possibly the last level. The last level is filled from left to right.

//#region Min Heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.parent(currentIndex);
      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return minValue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftIndex = this.leftChild(currentIndex);
      const rightIndex = this.rightChild(currentIndex);
      let smallestIndex = currentIndex;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightIndex;
      }

      if (smallestIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[currentIndex],
      ];
      currentIndex = smallestIndex;
    }
  }
}

//#endregion Min Heap

// Max Heap:

// How a max heap works:
// - The root node is the largest element in the heap.
// - The parent node is larger than or equal to its child nodes.
// - The left child node is filled first.
// - The heap is a complete binary tree, meaning that all levels of the tree are fully filled
//   except possibly the last level. The last level is filled from left to right.

//#region Max Heap

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.parent(currentIndex);
      if (this.heap[parentIndex] >= this.heap[currentIndex]) {
        break;
      }

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    const maxValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return maxValue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftIndex = this.leftChild(currentIndex);
      const rightIndex = this.rightChild(currentIndex);
      let largestIndex = currentIndex;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightIndex;
      }

      if (largestIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[largestIndex]] = [
        this.heap[largestIndex],
        this.heap[currentIndex],
      ];
      currentIndex = largestIndex;
    }
  }
}

//#endregion Max Heap

// Binary Heap:

// How a binary heap works:
// - The root node is the largest element in the heap.
// - The parent node is larger than or equal to its child nodes.
// - The left child node is filled first.
// - The heap is a complete binary tree, meaning that all levels of the tree are fully filled
//   except possibly the last level. The last level is filled from left to right.

//#region Binary Heap

class BinaryHeap {
  constructor(minHeap = true) {
    this.heap = [];
    this.minHeap = minHeap;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.parent(currentIndex);
      const shouldSwap = this.minHeap
        ? this.heap[parentIndex] > this.heap[currentIndex]
        : this.heap[parentIndex] < this.heap[currentIndex];

      if (!shouldSwap) {
        break;
      }

      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  extract() {
    if (this.heap.length === 0) {
      return null;
    }

    const topValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return topValue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftIndex = this.leftChild(currentIndex);
      const rightIndex = this.rightChild(currentIndex);
      let compareIndex = currentIndex;

      if (leftIndex < this.heap.length) {
        const shouldCompare = this.minHeap
          ? this.heap[leftIndex] < this.heap[compareIndex]
          : this.heap[leftIndex] > this.heap[compareIndex];
        if (shouldCompare) {
          compareIndex = leftIndex;
        }
      }

      if (rightIndex < this.heap.length) {
        const shouldCompare = this.minHeap
          ? this.heap[rightIndex] < this.heap[compareIndex]
          : this.heap[rightIndex] > this.heap[compareIndex];
        if (shouldCompare) {
          compareIndex = rightIndex;
        }
      }

      if (compareIndex === currentIndex) {
        break;
      }

      [this.heap[currentIndex], this.heap[compareIndex]] = [
        this.heap[compareIndex],
        this.heap[currentIndex],
      ];
      currentIndex = compareIndex;
    }
  }
}

//#endregion Binary Heap

// Fibonacci Heap:

// How a Fibonacci heap works:
// - The root node is the smallest element in the heap.
// - The parent node is smaller than or equal to its child nodes.
// - The left child node is filled first.
// - The heap is a complete binary tree, meaning that all levels of the tree are fully filled
//   except possibly the last level. The last level is filled from left to right.

//#region Fibonacci Heap

class FibonacciHeap {
  constructor() {
    this.minNode = null;
    this.size = 0;
  }

  insert(key, value) {
    const newNode = new FibonacciNode(key, value); // Code for FibonacciNode is below.
    if (!this.minNode) {
      this.minNode = newNode;
    } else {
      this._link(this.minNode, newNode);
      if (newNode.key < this.minNode.key) {
        this.minNode = newNode;
      }
    }
    this.size++;
  }

  extractMin() {
    if (!this.minNode) {
      return null;
    }

    const minNode = this.minNode;
    if (minNode.child) {
      let child = minNode.child;
      do {
        const next = child.next;
        child.prev = minNode.prev;
        child.next = minNode.next;
        minNode.prev.next = child;
        minNode.next.prev = child;
        if (child.key < this.minNode.key) {
          this.minNode = child;
        }
        child = next;
      } while (child !== minNode.child);
    }

    minNode.prev.next = minNode.next;
    minNode.next.prev = minNode.prev;
    if (minNode === minNode.next) {
      this.minNode = null;
    } else {
      this.minNode = minNode.next;
      this._consolidate();
    }

    this.size--;
    return minNode.value;
  }

  decreaseKey(node, newKey) {
    if (newKey > node.key) {
      throw new Error("New key is greater than the current key.");
    }

    node.key = newKey;
    const parent = node.prev;

    if (node !== parent.child) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      parent.degree--;

      node.prev = this.minNode;
      node.next = this.minNode.next;
      this.minNode.next.prev = node;
      this.minNode.next = node;

      node.marked = false;
    }

    if (newKey < this.minNode.key) {
      this.minNode = node;
    }

    if (parent.marked) {
      this._cascadingCut(parent);
    }
  }

  _consolidate() {
    const maxDegree = Math.floor(Math.log2(this.size)) + 1;
    const degrees = new Array(maxDegree);

    for (let i = 0; i < maxDegree; i++) {
      degrees[i] = null;
    }

    let current = this.minNode;
    const nodes = [];
    do {
      nodes.push(current);
      current = current.next;
    } while (current !== this.minNode);

    for (const node of nodes) {
      let x = node;
      let d = x.degree;
      while (degrees[d]) {
        let y = degrees[d];
        if (x.key > y.key) {
          [x, y] = [y, x];
        }
        this._link(y, x);
        degrees[d] = null;
        d++;
      }
      degrees[d] = x;
    }

    this.minNode = null;

    for (const node of degrees) {
      if (node) {
        if (!this.minNode) {
          this.minNode = node;
        } else if (node.key < this.minNode.key) {
          this.minNode = node;
        }
      }
    }
  }

  _link(y, x) {
    y.prev.next = y.next;
    y.next.prev = y.prev;

    if (!x.child) {
      x.child = y;
      y.prev = y;
      y.next = y;
    } else {
      y.prev = x.child;
      y.next = x.child.next;
      x.child.next.prev = y;
      x.child.next = y;
    }

    y.marked = false;
    x.degree++;
  }

  _cascadingCut(node) {
    const parent = node.prev;

    if (parent) {
      if (!node.marked) {
        node.marked = true;
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        parent.child = node === node.next ? null : node.next;
        parent.degree--;
        node.prev = this.minNode;
        node.next = this.minNode.next;
        this.minNode.next.prev = node;
        this.minNode.next = node;
        node.marked = false;
        this._cascadingCut(parent);
      }
    }
  }
}

// Node structure for a Fibonacci Heap.
class FibonacciNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.degree = 0;
    this.marked = false;
    this.child = null;
    this.prev = this;
    this.next = this;
  }
}

//#endregion Fibonacci Heap

// Example Usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(12);
console.log("Extracted Minimum Value from Min Heap:", minHeap.extractMin()); // 5

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(12);
console.log("Extracted Maximum Value from Max Heap:", maxHeap.extractMax()); // 12

const binaryMinHeap = new BinaryHeap(true);
binaryMinHeap.insert(10);
binaryMinHeap.insert(5);
binaryMinHeap.insert(12);
console.log(
  "Extracted Minimum Value from Binary Min Heap:",
  binaryMinHeap.extract()
); // 5

const binaryMaxHeap = new BinaryHeap(false);
binaryMaxHeap.insert(10);
binaryMaxHeap.insert(5);
binaryMaxHeap.insert(12);
console.log(
  "Extracted Maximum Value from Binary Max Heap:",
  binaryMaxHeap.extract()
); // 12

const fibonacciHeap = new FibonacciHeap();
fibonacciHeap.insert(10);
fibonacciHeap.insert(5);
fibonacciHeap.insert(12);
console.log(
  "Extracted Minimum Value from Fibonacci Heap:",
  fibonacciHeap.extractMin()
); // 5
