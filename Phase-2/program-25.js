console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-25] - [Understanding scope and closures]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 25: Understanding scope and closures
// Global scope
let globalVar = "I am global";
function outerFunction(outerParam) {
 // Function scope (local to outerFunction)
 let outerVar = "I am in outer function";

 function innerFunction(innerParam) {
 // Function scope (local to innerFunction)
 let innerVar = "I am in inner function";

 console.log("Inner can access:");
 console.log("- globalVar:", globalVar);
 console.log("- outerParam:", outerParam);
 console.log("- outerVar:", outerVar);
 console.log("- innerParam:", innerParam);
 console.log("- innerVar:", innerVar);
 }

 innerFunction("inner argument");
 // console.log(innerVar); // ERROR: Not accessible here
}
outerFunction("outer argument");
// Closure Example - Counter Factory
function createCounter(initialValue = 0) {
 let count = initialValue; // Private variable

 return {
 increment: function() {
 count++;
 return count;
 },
 decrement: function() {
 count--;
 return count;
 },
 getValue: function() {
 return count;
 },
 reset: function() {
 count = initialValue;
 return count;
 }
 };
}
const counter1 = createCounter(10);
const counter2 = createCounter(0);
console.log("\nCounter 1:");
console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter1.getValue()); // 12
console.log("\nCounter 2:");
console.log(counter2.decrement()); // -1
console.log(counter2.getValue()); // -1
// The 'count' variable is private and persists between calls!
