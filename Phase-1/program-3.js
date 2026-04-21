console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-3] - [Variable declarations and scope differences]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 3: Variable declarations and scope differences
// var - function scoped (older way)
var oldWay = "I am declared with var";
console.log("var variable:", oldWay);
// let - block scoped (modern way)
let modernWay = "I am declared with let";
console.log("let variable:", modernWay);
// const - cannot be reassigned
const constantValue = "I cannot change";
console.log("const variable:", constantValue);
// Uncommenting below line would cause error:
// constantValue = "New value"; // TypeError: Assignment to constant variable