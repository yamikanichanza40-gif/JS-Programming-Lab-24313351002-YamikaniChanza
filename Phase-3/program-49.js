console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-49] - [Array creation utility methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 49: Array creation utility methods
console.log("--- Array.from() ---");
// From string
const fromString = Array.from('JavaScript');
console.log("From string:", fromString);
// From Set
const set = new Set([1, 2, 3, 2, 1, 4]);
const fromSet = Array.from(set);
console.log("From Set (deduplicated):", fromSet);
// From Map
const map = new Map([
 ['a', 1],
 ['b', 2],
 ['c', 3]
]);
const fromMap = Array.from(map);
console.log("From Map:", fromMap);
const mapKeys = Array.from(map.keys());
const mapValues = Array.from(map.values());
console.log("Map keys:", mapKeys);
console.log("Map values:", mapValues);
// From NodeList (simulated)
const divs = { 0: 'div1', 1: 'div2', 2: 'div3', length: 3 };
const fromArrayLike = Array.from(divs);
console.log("From array-like object:", fromArrayLike);
// From arguments object
function argsToArray() {
 return Array.from(arguments);
 }
console.log("From arguments:", argsToArray('a', 'b', 'c', 'd'));
console.log("\n--- Array.from() with mapping function ---");
// Create range with mapping
const squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Squares of 1-5:", squares);
// Generate random numbers
const randomNumbers = Array.from({ length: 5 }, () =>
Math.floor(Math.random() * 100));
console.log("Random numbers:", randomNumbers);
// Create sequence
const sequence = Array.from({ length: 10 }, (_, i) => i * 2);
console.log("Even numbers 0-18:", sequence);
// Generate alphabet
const alphabet = Array.from({ length: 26 }, (_, i) =>
String.fromCharCode(65 + i));
console.log("Alphabet:", alphabet);
console.log("\n--- Array.of() ---");
// Creates array from arguments (unlike Array constructor)
const of1 = Array.of(7);
console.log("Array.of(7):", of1); // [7]
console.log("new Array(7):", new Array(7)); // [empty × 7]
const of2 = Array.of(1, 2, 3, 4, 5);
console.log("Array.of(1, 2, 3, 4, 5):", of2);
const of3 = Array.of('hello', true, 42, { name: 'obj' });
console.log("Mixed types:", of3);
console.log("\n--- Practical: Creating matrix with Array.from() ---");
function createMatrix(rows, cols, initialFn = (r, c) => 0) {
 return Array.from({ length: rows }, (_, r) =>
 Array.from({ length: cols }, (_, c) => initialFn(r, c))
 );
}
const identityMatrix = createMatrix(3, 3, (r, c) => r === c ? 1 : 0);
console.log("Identity matrix:");
identityMatrix.forEach(row => console.log(row));
const multiplicationTable = createMatrix(5, 5, (r, c) => (r + 1) * (c + 1));
console.log("\n5x5 Multiplication table:");
multiplicationTable.forEach(row =>
 console.log(row.map(n => n.toString().padStart(4, ' ')).join(''))
);
console.log("\n--- Practical: Pagination with Array.from() ---");
function paginate(items, pageSize) {
 const pages = Math.ceil(items.length / pageSize);
 return Array.from({ length: pages }, (_, i) =>
 items.slice(i * pageSize, (i + 1) * pageSize)
 );
}
const allItems = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
const pages = paginate(allItems, 10);
pages.forEach((page, i) => {
 console.log(`Page ${i + 1}:`, page);
});