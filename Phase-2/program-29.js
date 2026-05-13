console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-29] - [IIFE for creating private scope]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 29: IIFE for creating private scope
// Basic IIFE
(function() {
 let privateVar = "I am private";
 console.log("IIFE executed:", privateVar);
})(); // Immediately invoked
// IIFE with parameters
(function(name, age) {
 console.log(`Hello ${name}, you are ${age} years old.`);
 })("Alice", 30);
// IIFE with arrow function
(() => {
 console.log("Arrow IIFE executed");
})();
// Module pattern using IIFE
const calculator = (function() {
 // Private variables and functions
 let result = 0;

 function validate(n) {
 return typeof n === "number" && !isNaN(n);
 }

 // Public API
 return {
 add: function(n) {
 if (validate(n)) result += n;
 return this;
 },
 subtract: function(n) {
 if (validate(n)) result -= n;
 return this;
 },
 multiply: function(n) {
 if (validate(n)) result *= n;
 return this;
 },
 getResult: function() {
 return result;
 },
 reset: function() {
 result = 0;
 return this;
 }
 };
})();
console.log("\nCalculator Module:");
calculator.add(10).subtract(3).multiply(2);
console.log("Result:", calculator.getResult()); // 14
calculator.reset().add(5).multiply(4);
console.log("Result:", calculator.getResult()); // 20
// Result variable is private - cannot be accessed directly
// console.log(calculator.result); // undefined