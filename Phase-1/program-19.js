console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-19] - [Handling errors gracefully]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 19: Handling errors gracefully 
// Example 1: Basic try-catch 
try { 
    console.log("Trying to execute code..."); 
    let result = 10 / 0; 
    console.log("Result:", result); 
     
    // This will cause an error 
    let obj = undefined; 
    console.log(obj.property);  // TypeError 
} catch (error) { 
    console.log("An error occurred:", error.message); 
    console.log("Error name:", error.name); 
} finally { 
    console.log("This always executes."); 
} 
// Example 2: Input validation with try-catch 
function divideNumbers(a, b) { 
    try { 
        if (b === 0) { 
            throw new Error("Division by zero is not allowed!"); 
        } 
        if (typeof a !== "number" || typeof b !== "number") { 
            throw new TypeError("Both arguments must be numbers!"); 
        }  
        return a / b; 
    } catch (error) { 
        console.log("Error in divideNumbers:", error.message); 
        return null; 
    } 
} 
console.log("\nDivision Tests:"); 
console.log("10 / 2 =", divideNumbers(10, 2));     // 5 
console.log("10 / 0 =", divideNumbers(10, 0));     // null (error handled) 
console.log("'a' / 2 =", divideNumbers("a", 2));   // null (error handled)