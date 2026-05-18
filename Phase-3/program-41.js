console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-41] - [Creating and manipulating arrays]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 41: Creating and manipulating arrays
// Array creation methods
const arr1 = [1, 2, 3, 4, 5]; // Array literal
const arr2 = new Array(1, 2, 3, 4, 5); // Array constructor
const arr3 = Array.from('hello'); // From iterable
const arr4 = Array.of(1, 2, 3, 4, 5); // Array.of()
console.log("--- Array Creation ---");
console.log("Array literal:", arr1);
console.log("Array constructor:", arr2);
console.log("Array.from('hello'):", arr3);
console.log("Array.of():", arr4);
// Length property and sparse arrays
console.log("\n--- Array Length ---");
const arr5 = [1, 2, 3];
console.log("Length:", arr5.length);
arr5.length = 5;
console.log("After extending length:", arr5); // [1, 2, 3, empty × 2]
arr5.length = 2;
console.log("After truncating length:", arr5); // [1, 2]

// Basic array methods
console.log("\n--- Basic Methods ---");
const fruits = ['apple', 'banana', 'orange'];
console.log("Original:", fruits);
console.log("indexOf('banana'):", fruits.indexOf('banana')); // 1
console.log("indexOf('grape'):", fruits.indexOf('grape')); // -1
console.log("includes('orange'):", fruits.includes('orange')); // true
console.log("includes('grape'):", fruits.includes('grape')); // false

// Join method
console.log("\n--- Join ---");
console.log("fruits.join():", fruits.join()); // "apple,banana,orange"
console.log("fruits.join(' | '):", fruits.join(' | ')); // "apple | banana | orange"
console.log("fruits.join(''):", fruits.join('')); // "applebananaorange"

// Concat method
console.log("\n--- Concat ---");
const moreFruits = ['grape', 'kiwi'];
const allFruits = fruits.concat(moreFruits);
console.log("Concatenated:", allFruits);
console.log("Multiple concat:", fruits.concat(moreFruits, ['mango', 'peach']));

// Slice method (doesn't modify original)
console.log("\n--- Slice ---");
const numbers = [10, 20, 30, 40, 50];
console.log("Original:", numbers);
console.log("slice(1, 3):", numbers.slice(1, 3)); // [20, 30]
console.log("slice(2):", numbers.slice(2)); // [30, 40, 50]
console.log("slice(-2):", numbers.slice(-2)); // [40, 50]
console.log("slice():", numbers.slice()); // Shallow copy

// Check if array
console.log("\n--- Array Checking ---");
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray('hello'):", Array.isArray('hello')); // false