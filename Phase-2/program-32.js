console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-32] - [Understanding 'this' in object methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 32: Understanding 'this' in object methods
const user = {
 name: "Alice",
 age: 28,

 // Regular method - 'this' refers to the object
 greet() {
 console.log(`Hello, I'm ${this.name}`);
 },

 // Arrow function - 'this' is lexical (from outer scope)
 greetArrow: () => {
 console.log(`Hello, I'm ${this.name}`); // undefined!
 },

 // Method that returns a function
 getGreeter() {
 return function() {
 console.log(`Hello, I'm ${this.name}`); // 'this' will be lost
 };
 }
}
// Method with preserved 'this'