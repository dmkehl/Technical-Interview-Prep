// JavaScript Hash Maps

// A hash map (or dictionary) is a collection of key-value pairs, where each unique key maps to a specific value.
// Hash maps are used in many areas including:
// - Hash Tables
// - Hash Sets

// JavaScript's built-in Map class is a hash map implementation.

// Industry uses for hash maps include:
// - Databases
// - Caches
// - Distributed Systems
// - Cryptocurrency
// - Blockchain
// - Natural Language Processing
// - Machine Learning
// - Data Analytics

class HashMap {
  constructor() {
    this.map = new Map(); // Use JavaScript's built-in Map to store key-value pairs.
  }

  // Add a key-value pair to the map.
  set(key, value) {
    this.map.set(key, value);
  }

  // Get the value associated with a key.
  get(key) {
    return this.map.get(key);
  }

  // Check if a key exists in the map.
  has(key) {
    return this.map.has(key);
  }

  // Remove a key-value pair from the map.
  remove(key) {
    this.map.delete(key);
  }

  // Print the map in a readable format.
  print() {
    for (const [key, value] of this.map) {
      console.log(`${key} => ${value}`);
    }
  }
}

// Example Usage
const hashMap = new HashMap();

hashMap.set("name", "Alice");
hashMap.set("age", 30);

console.log("Name:", hashMap.get("name")); // "Alice"
console.log("Age:", hashMap.get("age")); // 30

hashMap.remove("age");
console.log("Does 'age' exist in the map?", hashMap.has("age")); // false

hashMap.print();
