console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-5] - [Working with strings]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 5: Working with strings
let firstName = "yamikani "; 
let lastName = "chanza"; 
let age = 24; 
// Method 1: Concatenation with + 
let fullName1 = firstName + " " + lastName; 
console.log("Concatenation:", fullName1); 
// Method 2: Template Literals (ES6+) - Preferred 
let fullName2 = `${firstName} ${lastName} is ${age} years old`; 
console.log("Template Literal:", fullName2); 
// String methods 
let text = "JavaScript Programming"; 
console.log("Length:", text.length);                    
console.log("Uppercase:", text.toUpperCase());          
PROGRAMMING 
console.log("Lowercase:", text.toLowerCase());          
programming 
console.log("Substring:", text.substring(0, 10));       
// 22 
// JAVASCRIPT 
// javascript 
// JavaScript 
console.log("Includes 'Script':", text.includes("Script")); // true
console.log("Character at index 5:", text.charAt(5));   // c 