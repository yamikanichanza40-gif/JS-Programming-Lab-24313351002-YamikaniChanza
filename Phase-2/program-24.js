console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-24] - [Function parameters and default values]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 24: Function parameters and default values
// Default parameters (ES6+)

function greet(name = "Guest", greeting = "Hello") {
 console.log(`${greeting}, ${name}!`);
}

greet();
greet("Alice");
greet("Bob", "Hi");
greet(undefined, "Welcome");

function addNumbers(...numbers) {
 let total = 0;
 for (let num of numbers) {
   total += num;
 }
 return total;
}

console.log("Sum:", addNumbers(1,2,3));