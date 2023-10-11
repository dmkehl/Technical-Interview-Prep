// Javasctipt Stacks

// Stacks are a LIFO data structure. Last in, first out. Think of a stack of
// plates, or a stack of markers, or a stack of....anything.

// Stacks are used to handle function invocations (the call stack).
// They are also used for undo/redo operations, routing (remember pages you have visited and go back/forward).

// How stacks work:
// - Stacks are a LIFO data structure. Last in, first out.
// - Stacks are used to handle function invocations (the call stack).
// - They are also used for undo/redo operations, routing (remember pages you have visited and go back/forward).
// - Stacks can be implemented using arrays or linked lists.
// - Stacks can be implemented using singly linked lists or doubly linked lists.
// - Stacks can be implemented using a dynamic array or a fixed array.
// - Stacks can be implemented using a stack pointer or a stack counter.

// Stack using an array

class StackUsingArray {
  constructor() {
    this.items = [];
  }

  // Push an element onto the stack.
  push(item) {
    this.items.push(item);
  }

  // Pop and return the top element from the stack.
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack.
  size() {
    return this.items.length;
  }
}

// Example Usage
const stack = new StackUsingArray();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2

// Stack using a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackUsingLinkedList {
  constructor() {
    this.top = null;
  }

  // Push an element onto the stack.
  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop and return the top element from the stack.
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    const poppedItem = this.top.data;
    this.top = this.top.next;
    return poppedItem;
  }

  // Return the top element of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.top.data;
  }

  // Check if the stack is empty.
  isEmpty() {
    return this.top === null;
  }

  // Get the size of the stack.
  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

// Example Usage
const linkedListStack = new StackUsingLinkedList();

linkedListStack.push(1);
linkedListStack.push(2);
linkedListStack.push(3);

console.log(linkedListStack.pop()); // 3
console.log(linkedListStack.peek()); // 2
console.log(linkedListStack.size()); // 2
