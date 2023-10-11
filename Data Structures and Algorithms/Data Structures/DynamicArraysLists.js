// JavaScript Dynamic Arrays and Lists

// Dynamic arrays (or lists) are resizable arrays that automatically grow or shrink as elements are added
// or removed. They provide dynamic storage for elements.
// Dynamic arrays are used in many areas including:
// - ArrayLists
// - Vectors
// - Hash Tables
// - Hash Maps
// - Hash Sets
// - Hash Tables

class DynamicArray {
  constructor() {
    this.array = new Array(1); // Initialize with a small size.
    this.size = 0; // Number of elements currently in the array.
    this.capacity = 1; // Maximum capacity of the array.
  }

  // Append an element to the end of the dynamic array.
  append(value) {
    if (this.size === this.capacity) {
      // If the array is full, double its capacity.
      this.resize(2 * this.capacity);
    }
    this.array[this.size] = value;
    this.size++;
  }

  // Get the element at a specific index.
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }
    return this.array[index];
  }

  // Update the element at a specific index.
  set(index, value) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }
    this.array[index] = value;
  }

  // Remove the element at a specific index.
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds.");
    }
    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.size--;
    if (this.size > 0 && this.size === this.capacity / 4) {
      // If the array is one-fourth full, halve its capacity.
      this.resize(this.capacity / 2);
    }
  }

  // Resize the dynamic array to a new capacity.
  resize(newCapacity) {
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.capacity = newCapacity;
  }
}

// Example Usage
const dynamicArray = new DynamicArray();
dynamicArray.append(1);
dynamicArray.append(2);
dynamicArray.append(3);

console.log("Element at index 1:", dynamicArray.get(1)); // 2

dynamicArray.set(1, 4);
console.log("Updated element at index 1:", dynamicArray.get(1)); // 4

dynamicArray.remove(0);
console.log("After removing element at index 0:", dynamicArray.get(0)); // 4
