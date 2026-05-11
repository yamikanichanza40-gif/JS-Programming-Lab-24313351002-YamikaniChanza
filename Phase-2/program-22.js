console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-22] - [Different ways to define functions]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 22: Different ways to define functions
// Function Declaration - Hoisted (can be called before definition)
console.log("Hoisting Example:");
console.log("multiply(4, 5) =", multiply(4, 5)); // Works!
function multiply(a, b) {
 return a * b;
}
// Function Expression - NOT hoisted
// console.log(subtract(10, 4)); // ERROR: Cannot access before initialization
const subtract = function(a, b) {
 return a - b;
};
console.log("subtract(10, 4) =", subtract(10, 4)); // Works here
// Named Function Expression
const factorial = function fact(n) {
 if (n <= 1) return 1;
 return n * fact(n - 1); // 'fact' is only visible inside the function
};
console.log("factorial(5) =", factorial(5));
// console.log(fact(5)); // ERROR: fact is not defined