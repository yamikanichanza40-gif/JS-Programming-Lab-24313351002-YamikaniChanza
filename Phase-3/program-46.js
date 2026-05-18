console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-46] - [Sorting arrays with custom comparators]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 46: Sorting arrays with custom comparators
console.log("--- Default sort (lexicographic) ---");
let fruits = ['banana', 'Apple', 'cherry', 'date'];
console.log("Original:", fruits);
console.log("Default sort:", fruits.sort());
console.log("Original modified!", fruits);
console.log("\n--- Numeric sort (with compare function) ---");
let numbers = [10, 5, 40, 25, 100, 1, 3];
console.log("Original:", numbers);
// Ascending
let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending);
// Descending
let descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending);
console.log("\n--- Sorting objects ---");
const students = [
 { name: 'Charlie', grade: 85, age: 20 },
 { name: 'Alice', grade: 92, age: 22 },
 { name: 'Bob', grade: 78, age: 19 },
 { name: 'David', grade: 95, age: 21 },
 { name: 'Eve', grade: 88, age: 20 }
];
// Sort by grade (ascending)
const byGrade = [...students].sort((a, b) => a.grade - b.grade);
console.log("Sorted by grade:", byGrade.map(s =>
`${s.name}:${s.grade}`));
// Sort by name (alphabetical)
const byName = [...students].sort((a, b) =>
a.name.localeCompare(b.name));
console.log("Sorted by name:", byName.map(s => s.name));
// Sort by age descending, then by grade descending
const byAgeThenGrade = [...students].sort((a, b) => {
 if (a.age !== b.age) return b.age - a.age;
 return b.grade - a.grade;
});
console.log("Sorted by age desc, then grade desc:",
 byAgeThenGrade.map(s => `${s.name} (${s.age}, ${s.grade})`));
console.log("\n--- reverse() ---");
let arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
arr.reverse();
console.log("After reverse():", arr);
console.log("\n--- toSorted() and toReversed() (ES2023+) ---");
if (typeof Array.prototype.toSorted === 'function') {
 let original = [3, 1, 4, 1, 5];
 let sorted = original.toSorted((a, b) => a - b);
 console.log("Original unchanged:", original);
 console.log("New sorted array:", sorted);

 let reversed = original.toReversed();
 console.log("New reversed array:", reversed);
}
console.log("\n--- Complex sorting example ---");
const tasks = [
 { name: 'Task A', priority: 'high', completed: false },
 { name: 'Task B', priority: 'low', completed: true },
 { name: 'Task C', priority: 'medium', completed: false },
 { name: 'Task D', priority: 'high', completed: true },
 { name: 'Task E', priority: 'low', completed: false }
];
const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
const sortedTasks = [...tasks].sort((a, b) => {
 // Incomplete tasks first
 if (a.completed !== b.completed) return a.completed ? 1 : -1;
 // Then by priority
 return priorityOrder[a.priority] - priorityOrder[b.priority];
});
console.log("Sorted tasks (incomplete first, then priority):");
sortedTasks.forEach(t => {
 console.log(` ${t.completed ? '✓' : '○'} ${t.name} (${t.priority})`);
});
console.log("\n--- Stable sorting ---");
const items = [{ category: 'A', value: 1 },
 { category: 'B', value: 2 },
 { category: 'A', value: 3 },
 { category: 'B', value: 4 }
];
const sorted = items.sort((a, b) => a.category.localeCompare(b.category));
console.log("Stable sort by category:", sorted);