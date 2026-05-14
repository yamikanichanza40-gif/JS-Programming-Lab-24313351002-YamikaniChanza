console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-39] - [Working with Object static methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 39: Working with Object static methods
// Sample object
const person = {
 firstName: 'John',
 lastName: 'Doe',
 age: 30,
 email: 'john@example.com',
 isActive: true
};
console.log("--- Object.keys() ---");
const keys = Object.keys(person);
console.log("Keys:", keys);
keys.forEach(key => {
 console.log(`${key}: ${person[key]}`);
});
console.log("\n--- Object.values() ---");
const values = Object.values(person);
console.log("Values:", values);
console.log("Sum of numeric values:",
 values.filter(v => typeof v === 'number').reduce((a, b) => a + b, 0));
console.log("\n--- Object.entries() ---");
const entries = Object.entries(person);
console.log("Entries:", entries);
entries.forEach(([key, value]) => {
 console.log(`${key} = ${value}`);
});
// Convert entries back to object
const entriesToObject = Object.fromEntries(entries);
console.log("\n--- Object.fromEntries() ---");
console.log("Reconstructed object:", entriesToObject);
// Object.assign() - Merging objects
console.log("\n--- Object.assign() ---");
const defaults = {
 theme: 'light',
 fontSize: 14,
 notifications: true,
 language: 'en'
};
const userSettings = {
 theme: 'dark',
 fontSize: 16
};
const finalSettings = Object.assign({}, defaults, userSettings);
console.log("Default settings:", defaults);
console.log("User settings:", userSettings);
console.log("Merged settings:", finalSettings);
// Deep cloning warning
console.log("\n--- Object.assign() Shallow Copy ---");
const original = {name: 'Original',
 settings: {
 volume: 50,
 brightness: 80
 }
};
const shallowCopy = Object.assign({}, original);
shallowCopy.name = 'Copy';
shallowCopy.settings.volume = 100; // Affects original!
console.log("Original after modifying copy:", original);
console.log("Shallow copy:", shallowCopy);
console.log("Warning: Nested objects are shared!");
// Object.hasOwn() - Modern property check
console.log("\n--- Object.hasOwn() ---");
console.log("Has 'firstName':", Object.hasOwn(person, 'firstName')); // true
console.log("Has 'toString':", Object.hasOwn(person, 'toString')); // false
(inherited)
// Object.is() - Value comparison
console.log("\n--- Object.is() ---");
console.log("Object.is(25, 25):", Object.is(25, 25)); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false (unlike ===)
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true (unlike===)
console.log("0 === -0:", 0 === -0); // true
console.log("NaN === NaN:", NaN === NaN); // false
// Object.getOwnPropertyNames() vs Object.keys()
console.log("\n--- Property Name Methods ---");
const objWithNonEnum = {};
Object.defineProperty(objWithNonEnum, 'hidden', {
 value: 'secret',
 enumerable: false
});
objWithNonEnum.visible = 'public';
console.log("Object.keys():", Object.keys(objWithNonEnum)); // ['visible']
console.log("Object.getOwnPropertyNames():",
Object.getOwnPropertyNames(objWithNonEnum)); // ['hidden', 'visible']
// Object.groupBy() - Modern grouping (ES2024)
console.log("\n--- Grouping with Object.groupBy() ---");
const students = [
 { name: 'Alice', grade: 'A' },
 { name: 'Bob', grade: 'B' },
 { name: 'Charlie', grade: 'A' },
 { name: 'David', grade: 'C' },
 { name: 'Eve', grade: 'B' }
];
// If Object.groupBy is available
if (typeof Object.groupBy === 'function') {
 const groupedByGrade = Object.groupBy(students, student =>
student.grade);
 console.log("Students grouped by grade:", groupedByGrade);
} else {
 // Manual grouping fallback
 const manualGroup = students.reduce((acc, student) => {
 if (!acc[student.grade]) acc[student.grade] = [];
 acc[student.grade].push(student);
 return acc;
 }, {});
 console.log("Students grouped manually:", manualGroup);
}