console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-10] - [Getting input from user via prompt dialog]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 10: Getting input from user via prompt dialog
let userName = prompt("Please enter your name:"); 
let userAge = prompt("Please enter your age:"); 
// Convert age string to number 
let ageNumber = parseInt(userAge); 
// Calculate birth year 
let currentYear = 2026; 
let birthYear = currentYear - ageNumber; 
// Display output using alert 
alert(`Hello ${userName}! You were born around ${birthYear}.`); 
// Also log to console 
console.log(`User: ${userName}, Age: ${ageNumber}, Birth Year: 
${birthYear}`);