console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-48] - [Spread operator and destructuring with arrays]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 48: Spread operator and destructuring with arrays
console.log("--- Spread Operator (...) ---");
// Copy array
const original = [1, 2, 3];
const copy = [...original];
console.log("Original:", original);
console.log("Copy:", copy);
console.log("copy === original:", copy === original); // false
// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const merged = [...arr1, ...arr2, ...arr3];
console.log("\nMerged arrays:", merged);
// Insert elements
const numbers = [1, 5, 6];
const withInsert = [0, ...numbers, 7, 8];
console.log("\nWith insertions:", withInsert);
// Convert iterables to array
const str = "Hello";
const chars = [...str];
console.log("\nString to array:", chars);
// Spread in function arguments
function sum(a, b, c) {
 return a + b + c;
}
const nums = [10, 20, 30];
console.log("\nsum(...nums):", sum(...nums));
// Math operations with spread
const values = [5, 2, 9, 1, 7];
console.log("\nMath.max(...values):", Math.max(...values));
console.log("Math.min(...values):", Math.min(...values));
console.log("\n--- Array Destructuring ---");
// Basic destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log("Destructured:", first, second, third);
// Skip elements
const [primary, , tertiary] = colors;
console.log("Skipped second:", primary, tertiary);
// Default values
const smallArray = ['only one'];
const [a = 'default1', b = 'default2'] = smallArray;
console.log("With defaults:", a, b);
// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("\nHead:", head);
console.log("Tail:", tail);
// Swapping variables
let x = 10, y = 20;
console.log("\nBefore swap: x =", x, "y =", y);
[x, y] = [y, x];
console.log("After swap: x =", x, "y =", y);
// Nested destructuring
const nestedArray = [1, [2, 3], 4];
const [firstNum, [secondNum, thirdNum], fourthNum] = nestedArray;
console.log("\nNested destructuring:", firstNum, secondNum, thirdNum,
fourthNum);
// Destructuring in function parameters
function processCoords([x, y]) {
 return `X: ${x}, Y: ${y}`;
}
console.log("\nprocessCoords([5, 10]):", processCoords([5, 10]));
// Returning multiple values
function getMinMax(arr) {
 return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = getMinMax([3, 7, 1, 9, 4]);
console.log("\nMin:", min, "Max:", max);
console.log("\n--- Practical: CSV Parsing ---");
const csvLine = 'John,Doe,30,Engineer';
const [firstName, lastName, age, profession] = csvLine.split(',');
console.log("Parsed CSV:", { firstName, lastName, age, profession });
console.log("\n--- Practical: Function with named array parameters ---");
function calculateStats([...numbers]) {
 const sum = numbers.reduce((a, b) => a + b, 0);
 const avg = sum / numbers.length;
 const min = Math.min(...numbers);
 const max = Math.max(...numbers);
 return { sum, avg, min, max };
}
const stats = calculateStats([85, 92, 78, 95, 88]);
console.log("Stats:", stats);