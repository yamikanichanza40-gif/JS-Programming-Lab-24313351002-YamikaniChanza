console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-42] - [Array iteration methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 42: Array iteration methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = [
 { name: 'Alice', grade: 85, major: 'CS' },
 { name: 'Bob', grade: 92, major: 'Math' },
 { name: 'Charlie', grade: 78, major: 'CS' },
 { name: 'David', grade: 95, major: 'Physics' },
 { name: 'Eve', grade: 88, major: 'CS' }
];
console.log("--- forEach (side effects only) ---");
console.log("Doubling each number:");
numbers.forEach((num, index) => {
 console.log(`Index ${index}: ${num} × 2 = ${num * 2}`);
});
console.log("\n--- map (transformation) ---");
const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);
const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames);
const studentSummaries = students.map(s => ({
 name: s.name,
 passed: s.grade >= 80,
 grade: s.grade
}));
console.log("Student summaries:", studentSummaries);
console.log("\n--- filter (selection) ---");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
const csStudents = students.filter(s => s.major === 'CS');
console.log("CS Students:", csStudents);
const highAchievers = students.filter(s => s.grade >= 90);
console.log("Students with grade >= 90:", highAchievers);
console.log("\n--- Chaining Methods ---");
const averageCSGrade = students
 .filter(s => s.major === 'CS')
 .map(s => s.grade)
 .reduce((sum, grade, _, arr) => sum + grade / arr.length, 0);
console.log("Average CS grade:", averageCSGrade.toFixed(2));
console.log("\n--- Performance Comparison ---");
const largeArray = Array.from({ length: 1000 }, (_, i) => i);
console.time('forEach');
largeArray.forEach(num => { const x = num * 2; });
console.timeEnd('forEach');
console.time('for loop');
for (let i = 0; i < largeArray.length; i++) {
    const x = largeArray[i] * 2;
}
console.timeEnd('for loop');