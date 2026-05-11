console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-21] - [Basic function declarations and invocation]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 21: Basic function declarations and invocation
// Function without parameters
function greet() {
 console.log("Hello, welcome to JavaScript!");
 }
// Function with parameters
function greetPerson(name) {
 console.log(`Hello, ${name}! Welcome to JavaScript!`);
}
// Function with return value
function add(a, b) {
 return a + b;
}
// Function with multiple returns
function getGrade(score) {
 if (score >= 90) return "A";
 if (score >= 80) return "B";
 if (score >= 70) return "C";
 if (score >= 60) return "D";
 return "F";
}
// Calling functions
greet();
greetPerson("Alice");
greetPerson("Bob");
let sum = add(15, 25);
console.log("15 + 25 =", sum);
console.log("Score 95 gets grade:", getGrade(95));
console.log("Score 75 gets grade:", getGrade(75));
console.log("Score 55 gets grade:", getGrade(55));