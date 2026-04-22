console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-9] - [Understanding automatic and manual type conversion]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

//Program 9: Understanding automatic and manual type conversion
console.log("5" + 3);        
console.log("5" - 3);        
console.log("5" * "2");      
console.log(true + true);    // 2 (true is 1, false is 0) 
// Explicit Conversion (Manual) 
let strNumber = "123.45"; 
let intNumber = parseInt(strNumber); 
let floatNumber = parseFloat(strNumber);
let numberConverted = Number(strNumber); 
console.log("parseInt:", intNumber);           
console.log("parseFloat:", floatNumber);       
console.log("Number():", numberConverted);     
// Converting to String 
let num = 456; 
console.log("toString():", num.toString());    // "456" 
console.log("String():", String(num));         
// Converting to Boolean 
console.log("Boolean(1):", Boolean(1));        
console.log("Boolean(0):", Boolean(0));        
console.log("Boolean(''):", Boolean(""));       
console.log("Boolean('hello'):", Boolean("hello")); // true