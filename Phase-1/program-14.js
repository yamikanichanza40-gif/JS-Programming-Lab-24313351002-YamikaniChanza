console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-14] - [Introduction to for loops ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 14: Introduction to for loops 
console.log("Counting from 1 to 10:"); 
for (let i = 1; i <= 10; i++) { 
    console.log(i); 
} 
console.log("\nCounting backwards from 10 to 1:"); 
for (let i = 10; i >= 1; i--) { 
    console.log(i); 
} 
console.log("\nEven numbers from 2 to 20:"); 
for (let i = 2; i <= 20; i += 2) { 
    console.log(i); 
} 
 
// Multiplication table 
 
let number = parseInt(prompt("Enter a number for multiplication table:")); 
console.log(`\nMultiplication table for ${number}:`); 
for (let i = 1; i <= 10; i++) { 
console.log(`${number} x ${i} = ${number * i}`); 
}