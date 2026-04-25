console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-15] - [Nested loops for patterns]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 15: Nested loops for patterns
console.log("Pattern 1: Right Triangle"); 
for (let i = 1; i <= 5; i++) { 
let row = ""; 
for (let j = 1; j <= i; j++) { 
row += "* "; 
} 
console.log(row); 
} 
console.log("\nPattern 2: Multiplication Grid (1-5)"); 
for (let i = 1; i <= 5; i++) { 
let row = ""; 
for (let j = 1; j <= 5; j++) { 
row += (i * j).toString().padStart(3, " "); 
} 
console.log(row); 
} 
console.log("\nPattern 3: Pyramid"); 
let rows = 5; 
for (let i = 1; i <= rows; i++) { 
let spaces = " ".repeat(rows - i); 
let stars = "*".repeat(2 * i - 1); 
console.log(spaces + stars); 
} 