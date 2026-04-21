console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-4] - [Exploring JavaScript data types]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 4: Exploring JavaScript data types
let numberType = 42;
let stringType = "Hello World";
let booleanType = true;
let undefinedType;
let nullType = null;
let objectType = { name: "John" };
let arrayType = [1, 2, 3];
let functionType = function() { return "Hello"; };
console.log("number:", typeof numberType); // "number"
console.log("string:", typeof stringType); // "string"
console.log("boolean:", typeof booleanType); // "boolean"
console.log("undefined:", typeof undefinedType); // "undefined"
console.log("null:", typeof nullType); // "object" (JavaScript quirk!)
console.log("object:", typeof objectType); // "object"
console.log("array:", typeof arrayType); // "object" (arrays are objects)
console.log("function:", typeof functionType); // "function"