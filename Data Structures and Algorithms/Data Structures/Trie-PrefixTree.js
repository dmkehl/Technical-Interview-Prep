// Javscript Trie (Prefix Tree)

// A trie, also known as a prefix tree, is a tree-like data structure that
// is used to store a dynamic set of strings with common prefixes. Tries are often used
// for tasks like autocomplete, dictionary lookups, and IP address storage.

// How a trie works:
// - A trie is a tree-like data structure that stores strings.
// - Each node in a trie represents a string (a prefix).
// - Each node has multiple children, each representing a single character.
// - The root node represents an empty string.
// - A trie can be used to store a dictionary or a map of key-value pairs.
// - Tries can be used to efficiently perform prefix lookups.

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the trie.
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the trie.
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if a word with a given prefix exists in the trie.
  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Example Usage
const trie = new Trie();

trie.insert("apple");
console.log("Search for 'apple':", trie.search("apple")); // true
console.log("Search for 'app':", trie.search("app")); // false

console.log("Starts with 'app':", trie.startsWith("app")); // true
