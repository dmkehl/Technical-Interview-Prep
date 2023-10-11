// Javascript Queues

// Javascript Queues are a type of list where data are inserted at the end and are removed from
// the front. Queues follow the First In First Out (FIFO) principle.

// Queues are used to store data in the order in which they occur.
// Queues are used in many areas including:
//   - Job scheduling
//   - Task processing
//   - Printer queues
//   - CPU scheduling
//   - Web server request management
//   - Breadth-first search
// Queues can be implemented using arrays or linked lists.

// Queues using Arrays

class QueueUsingArray {
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue (enqueue).
  enqueue(item) {
    this.items.push(item);
  }

  // Remove and return the front element of the queue (dequeue).
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.items.shift();
  }

  // Get the front element of the queue without removing it (peek).
  front() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.items[0];
  }

  // Check if the queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue.
  size() {
    return this.items.length;
  }
}

// Example Usage
const queue = new QueueUsingArray();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.size()); // 2

// Queues using Linked Lists

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueUsingLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  // Add an element to the back of the queue (enqueue).
  enqueue(item) {
    const newNode = new Node(item);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  // Remove and return the front element of the queue (dequeue).
  dequeue() {
    if (!this.front) {
      return "Queue is empty.";
    }
    const removedItem = this.front.data;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    return removedItem;
  }

  // Get the front element of the queue without removing it (peek).
  frontItem() {
    if (!this.front) {
      return "Queue is empty.";
    }
    return this.front.data;
  }

  // Check if the queue is empty.
  isEmpty() {
    return !this.front;
  }
}

// Example Usage
const linkedListQueue = new QueueUsingLinkedList();

linkedListQueue.enqueue(1);
linkedListQueue.enqueue(2);
linkedListQueue.enqueue(3);

console.log(linkedListQueue.dequeue()); // 1
console.log(linkedListQueue.frontItem()); // 2
