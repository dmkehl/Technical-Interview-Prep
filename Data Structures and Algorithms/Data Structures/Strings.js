// JavaScript Strings

// A string is a sequence of characters, enclosed in single ('') or double ("") quotes.

// Example:
const str = "Hello, World!";

// String Length
// - Description: Gets the number of characters in the string.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const length = str.length;
console.log("Length:", length);

// Character Access (indexing starts at 0)
// - Description: Accesses a character at a specific index in the string.
// - Time Complexity: O(1)
// - Space Complexity: O(1)
const firstChar = str[0];
console.log("First Character:", firstChar);

// String Concatenation
// - Description: Combines two or more strings.
// - Time Complexity: O(n) where n is the total length of the concatenated strings.
// - Space Complexity: O(n) where n is the total length of the concatenated strings.
const greeting = "Hello";
const name = "Alice";
const combined = greeting + ", " + name;
console.log("Concatenated String:", combined);

// Substring
// - Description: Extracts a portion of the string by specifying start and end indices.
// - Time Complexity: O(k) where k is the length of the extracted substring.
// - Space Complexity: O(k) where k is the length of the extracted substring.
const subStr = str.substring(0, 5);
console.log("Substring:", subStr);

// String Search
// - Description: Searches for a substring within the string and returns its index.
// - Time Complexity: O(n) where n is the length of the string.
// - Space Complexity: O(1)
const index = str.indexOf("World");
console.log("Index of 'World':", index);

// Splitting a String
// - Description: Splits the string into an array of substrings based on a delimiter.
// - Time Complexity: O(n) where n is the length of the string.
// - Space Complexity: O(m) where m is the number of substrings in the result.
const words = str.split(", ");
console.log("Split String:", words);

// Removing Whitespace
// - Description: Removes leading and trailing whitespace from a string.
// - Time Complexity: O(n) where n is the length of the string.
// - Space Complexity: O(n) where n is the length of the string.
const whitespace = "   Some spaces    ";
const trimmed = whitespace.trim();
console.log("Trimmed:", trimmed);

// String Functions
// - Description: Performs string operations like converting to uppercase and lowercase.
// - Time Complexity: O(n) where n is the length of the string.
// - Space Complexity: O(n) where n is the length of the string.
const uppercase = str.toUpperCase();
console.log("Uppercase:", uppercase);

const lowercase = str.toLowerCase();
console.log("Lowercase:", lowercase);

// String Template Literals (ES6)
// - Description: Allows creating strings with embedded expressions.
// - Time Complexity: O(n) where n is the length of the template string.
// - Space Complexity: O(n) where n is the length of the template string.
const age = 30;
const template = `My age is ${age}`;
console.log("Template Literal:", template);
