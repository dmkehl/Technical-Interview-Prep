// JavaScript LRU Cache

// A Least Recently Used (LRU) cache is a data structure that holds a maximum number of items. When the cache is full and a new item
// is inserted, the least recently used item is removed from the cache to make space for the new item.

// LRU caches are used in many areas including:
// - Caches
// - Databases
// - Operating Systems
// - Web Servers
// - Compilers
// - Routers
// - Natural Language Processing

// How an LRU cache works:
// - An LRU cache is made up of a doubly linked list and a hash map.
// - The doubly linked list stores the items in the cache ordered by usage.
// - The hash map stores the key-value pairs with references to the linked list nodes.
// - When an item is accessed, it is moved to the end of the list.
// - When an item is added to the cache, it is added to the end of the list.
// - When the cache is full, the item at the front of the list (least recently used) is removed.

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Maximum capacity of the cache.
    this.cache = new Map(); // Map to store key-value pairs.
  }

  // Get the value associated with a key. If the key is not in the cache, return -1.
  get(key) {
    if (this.cache.has(key)) {
      // Move the accessed item to the end of the cache (most recently used).
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }

  // Put a key-value pair into the cache. If the cache is at capacity, remove the least recently used item.
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key); // Remove the old entry.
    } else if (this.cache.size >= this.capacity) {
      // Cache is full; remove the least recently used item (first item in the Map).
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value); // Add the new entry to the end of the cache (most recently used).
  }
}

// Example Usage
const lruCache = new LRUCache(3);

lruCache.put(1, "A");
lruCache.put(2, "B");
lruCache.put(3, "C");

console.log("Cache Content (After Inserts):", [...lruCache.cache]);
console.log("Get 2:", lruCache.get(2)); // "B"

lruCache.put(4, "D");

console.log("Cache Content (After Eviction and Insert):", [...lruCache.cache]);
console.log("Get 1:", lruCache.get(1)); // -1 (Not found)

lruCache.put(5, "E");

console.log("Cache Content (After Eviction and Insert):", [...lruCache.cache]);
