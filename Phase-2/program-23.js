console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-23] - [ES6 Arrow functions]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 23: ES6 Arrow functions
// Traditional function
const traditionalAdd = function(a, b) {
 return a + b;
};
// Arrow function - basic syntax
const arrowAdd = (a, b) => {
 return a + b;
};
// Arrow function - implicit return (no curly braces)
const implicitAdd = (a, b) => a + b;
// Arrow function - single parameter (no parentheses needed)
const square = x => x * x;
// Arrow function - no parameters
const getRandom = () => Math.floor(Math.random() * 100) + 1;
// Arrow function - returning an object (wrap in parentheses)
const createPerson = (name, age) => ({ name: name, age: age });
console.log("Traditional:", traditionalAdd(5, 3));
console.log("Arrow with braces:", arrowAdd(5, 3));
console.log("Arrow implicit:", implicitAdd(5, 3));
console.log("Square of 7:", square(7));
console.log("Random number:", getRandom());
console.log("Created person:", createPerson("John", 30));