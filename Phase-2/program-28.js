console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-28] - [Functions that call themselves]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 28: Functions that call themselves
// Factorial using recursion
function factorial(n) {
 // Base case
 if (n <= 1) return 1;
 // Recursive case
 return n * factorial(n - 1);
}
console.log("Factorial Examples:");
console.log("5! =", factorial(5)); // 120
console.log("7! =", factorial(7)); // 5040
// Fibonacci sequence
function fibonacci(n) {
 if (n <= 1) return n;
 return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("\nFibonacci Sequence:");
for (let i = 0; i <= 10; i++) {
 console.log(`F(${i}) = ${fibonacci(i)}`);
}
// Recursive directory traversal simulation
function traverseObject(obj, path = "") {
 for (let key in obj) {
 let currentPath = path ? `${path}.${key}` : key;
 if (typeof obj[key] === "object" && obj[key] !== null) {
 traverseObject(obj[key], currentPath);
 } else {
 console.log(`${currentPath} = ${obj[key]}`);
 }
 }
}
let data = {user: {
 name: "John",
 address: {
 street: "123 Main St",
 city: "Boston"
 }
 },
 settings: {
 theme: "dark"
 }
};
console.log("\nRecursive Object Traversal:");
traverseObject(data);
