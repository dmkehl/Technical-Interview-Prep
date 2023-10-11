// JavaScript Bit Manipulation

// Bit manipulation involves operations on individual bits within a number.
// Bit manipulation is a low-level optimization technique.
// Bit manipulation is used in many areas including:
// - Compression Algorithms
// - Cryptography
// - Graphics
// - Device Drivers
// - Embedded Systems
// - Networking
// - Database Systems
// - Artificial Intelligence
// - Computer Architecture
// - Operating Systems
// - Compiler Design
// - Parallel Processing
// - Digital Signal Processing

// Example:
const num = 5; // Binary: 101

// Bitwise AND
// - Description: Performs a bitwise AND operation between two numbers.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const andResult = num & 3; // 101 & 011 = 001 (Decimal: 1)
console.log("Bitwise AND Result:", andResult);

// Bitwise OR
// - Description: Performs a bitwise OR operation between two numbers.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const orResult = num | 2; // 101 | 010 = 111 (Decimal: 7)
console.log("Bitwise OR Result:", orResult);

// Bitwise XOR
// - Description: Performs a bitwise XOR operation between two numbers.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const xorResult = num ^ 6; // 101 ^ 110 = 011 (Decimal: 3)
console.log("Bitwise XOR Result:", xorResult);

// Bitwise NOT
// - Description: Performs a bitwise NOT operation, inverting the bits.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const notResult = ~num; // ~101 = 11111010 (Decimal: -6)
console.log("Bitwise NOT Result:", notResult);

// Left Shift
// - Description: Shifts the bits of a number to the left by a specified number of positions.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const leftShiftResult = num << 2; // 101 << 2 = 10100 (Decimal: 20)
console.log("Left Shift Result:", leftShiftResult);

// Right Shift (Arithmetic)
// - Description: Shifts the bits of a number to the right, preserving the sign bit (sign-extending).
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const rightShiftResult = num >> 1; // 101 >> 1 = 10 (Decimal: 2)
console.log("Right Shift (Arithmetic) Result:", rightShiftResult);

// Right Shift (Logical)
// - Description: Shifts the bits of a number to the right, filling with zeros.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const logicalRightShiftResult = num >>> 1; // 101 >>> 1 = 10 (Decimal: 2)
console.log("Right Shift (Logical) Result:", logicalRightShiftResult);

// Bit Manipulation Functions
// - Description: Common bit manipulation tasks like checking if a number is a power of 2.
// - Time Complexity: O(1)
// - Space Complexity: O(1)

// Check if a number is a power of 2
function isPowerOf2(n) {
  return (n & (n - 1)) === 0;
}

const powerOf2 = isPowerOf2(8); // true (2^3)
console.log("Is 8 a Power of 2?", powerOf2);

// Set a specific bit at a given position
function setBit(num, position) {
  return num | (1 << position);
}

const setBitResult = setBit(5, 1); // 101 | 010 = 111 (Decimal: 7)
console.log("Set Bit Result:", setBitResult);
