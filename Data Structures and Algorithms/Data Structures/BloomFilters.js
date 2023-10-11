// JavaScript Bloom Filters

// A Bloom filter is a probabilistic data structure used for testing whether an element is a member of
// a set. It may return false positives but no false negatives.
// Bloom filters are used in many areas including:
// - Spell Checkers
// - Databases
// - Network Routers
// - Cryptocurrency
// - Distributed Systems
// - Web Caching
// - Spam Filters
// - Virus Scanners
// - Recommendation Systems
// - Machine Learning
// - Bioinformatics
// - Natural Language Processing
// - Data Analytics
// - Network Monitoring
// - Data Compression
// - Blockchain

class BloomFilter {
  constructor(size, numHashFunctions) {
    // Initialize the Bloom filter with a given size and number of hash functions.
    this.size = size;
    this.numHashFunctions = numHashFunctions;
    this.bits = new Array(size).fill(false);
  }

  // Hash Function (example)
  hashFunction(value, seed) {
    // A simple hash function that returns a value between 0 and this.size - 1.
    // In practice, cryptographic hash functions are used.
    return (value * seed) % this.size;
  }

  // Insert Element
  insert(value) {
    // Set the bits at the positions determined by hash functions to true.
    for (let i = 0; i < this.numHashFunctions; i++) {
      const index = this.hashFunction(value, i);
      this.bits[index] = true;
    }
  }

  // Check Membership
  contains(value) {
    // Check if all bits at the positions determined by hash functions are true.
    for (let i = 0; i < this.numHashFunctions; i++) {
      const index = this.hashFunction(value, i);
      if (!this.bits[index]) {
        return false;
      }
    }
    return true;
  }
}

// Example Usage
const bloomFilter = new BloomFilter(100, 3);
bloomFilter.insert("apple");
bloomFilter.insert("banana");
console.log("Contains 'apple'?", bloomFilter.contains("apple")); // true
console.log("Contains 'cherry'?", bloomFilter.contains("cherry")); // false
