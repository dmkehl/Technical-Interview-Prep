// Find Closest Value in BST

// Given a BST, write a function that reutrns the closest value to the target value.
// There will be only one closest value;
// Each node has a value, left, and right where the value is greater than all numbers to the left and less than
// all numbers to the right.

function findClosestValue(tree, target) {
  return findClosestValueHelper(tree, target, tree.value);
}

function findClosestValueHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// Class of the input tree
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
