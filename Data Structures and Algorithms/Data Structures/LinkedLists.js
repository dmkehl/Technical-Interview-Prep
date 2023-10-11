// JavaScript Linked Lists

// A linked list is a linear data structure in which elements are stored in nodes. Each node contains
// data and a reference (link) to the next node in the sequence.

// Linked lists are used in many areas including:
// - Stacks
// - Queues
// - Graphs
// - Trees
// - Hash Tables
// - Caches
// - Distributed Systems
// - Natural Language Processing

// How a linked list works:
// - A linked list is made up of nodes.
// - Each node contains data and a reference (link) to the next node in the sequence.
// - The first node is called the head. The last node is called the tail.
// - The tail node's next reference is null, indicating the end of the list.
// - Linked lists can be singly linked or doubly linked.
// - Singly linked lists have nodes that only reference the next node.
// - Doubly linked lists have nodes that reference the next node and the previous node.

// Node Structure
class Node {
  constructor(data) {
    this.data = data; // Data stored in the node.
    this.next = null; // Reference to the next node.
  }
}

// Singly Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null; // Head node (start of the list).
  }

  // Insert a node at the beginning of the list.
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a node at the end of the list.
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Delete a node with a specific value from the list.
  deleteNode(value) {
    if (!this.head) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Search for a node with a specific value and return it.
  searchNode(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}

// Example Usage
const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.insertAtBeginning(1);
singlyLinkedList.insertAtBeginning(2);
singlyLinkedList.insertAtEnd(3);
singlyLinkedList.insertAtEnd(4);

singlyLinkedList.deleteNode(2);
const searchResult = singlyLinkedList.searchNode(3);

console.log("Singly Linked List:");
console.log(singlyLinkedList.head);
console.log("Search Result:", searchResult);

// Doubly Linked List
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert a node at the end of the list.
  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Delete a node with a specific value from the list.
  deleteNode(value) {
    if (!this.head) {
      return;
    }

    if (this.head.data === value) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    while (current && current.data !== value) {
      current = current.next;
    }

    if (current) {
      if (current.prev) {
        current.prev.next = current.next;
      }
      if (current.next) {
        current.next.prev = current.prev;
      }
    }
  }
}

// Example Usage
const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.insertAtEnd(1);
doublyLinkedList.insertAtEnd(2);
doublyLinkedList.insertAtEnd(3);

doublyLinkedList.deleteNode(2);

console.log("\nDoubly Linked List:");
console.log(doublyLinkedList.head);
