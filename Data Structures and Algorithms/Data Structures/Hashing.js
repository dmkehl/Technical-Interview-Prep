// JavaScript Hashing

// Hashing is a process of converting data (keys) into a fixed-size string of characters, which
// is typically a numerical value. It is commonly used to implement data structures like hash tables.

// Hashing is used in many areas including:
// - Hash Tables
// - Hash Maps
// - Hash Sets

class HashTable {
  constructor() {
    this.table = new Array(100); // Initialize an array of size 100 for the hash table.
  }

  // A simple hash function that maps keys to an index in the table.
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Store a key-value pair in the hash table.
  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  // Retrieve the value associated with a key from the hash table.
  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    for (const pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }
}

// Example Usage
const hashTable = new HashTable();

hashTable.set("name", "Alice");
hashTable.set("age", 30);

console.log("Name:", hashTable.get("name")); // "Alice"
console.log("Age:", hashTable.get("age")); // 30
