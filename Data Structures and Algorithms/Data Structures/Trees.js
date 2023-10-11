// Javascript Trees

// Trees are a data structure that consists of nodes in a parent/child relationship.
// Unlike linked lists, trees are nonlinear. They can be used to represent file structures, HTML elements, and more.
// Trees are also used in many AI algorithms, such as minimax and alpha-beta pruning.

// How trees work:
// - Trees consist of nodes in a parent/child relationship.
// - Each node can have an arbitrary number of children.
// - The top node is called the root.
// - Nodes with no children are called leaves.
// - Trees can be traversed in different ways, including breadth-first and depth-first.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree.
  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  // Search for a value in the binary tree.
  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this._searchNode(node.left, value);
    } else {
      return this._searchNode(node.right, value);
    }
  }

  // Perform an in-order traversal of the binary tree.
  inOrderTraversal(callback) {
    this._inOrder(this.root, callback);
  }

  _inOrder(node, callback) {
    if (node) {
      this._inOrder(node.left, callback);
      callback(node.value);
      this._inOrder(node.right, callback);
    }
  }
}

// Example Usage
const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);

console.log("In-Order Traversal:");
binaryTree.inOrderTraversal((value) => console.log(value));

console.log("Search for 7:", binaryTree.search(7)); // true
console.log("Search for 12:", binaryTree.search(12)); // false
