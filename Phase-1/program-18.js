console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-18] - [Controlling loop flow with break and continue ]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 18: Controlling loop flow with break and continue 
console.log("Break Example - Stop at 5:"); 
for (let i = 1; i <= 10; i++) { 
    if (i === 5) { 
        console.log("Breaking at i =", i); 
        break;  // Exit loop completely 
    } 
    console.log(i); 
} 
 
console.log("\nContinue Example - Skip multiples of 3:"); 
for (let i = 1; i <= 10; i++) { 
    if (i % 3 === 0) { 
        continue;  // Skip to next iteration 
    } 
    console.log(i); 
} 
 
console.log("\nPrime Number Finder:"); 
let n = 20; 
console.log(`Prime numbers up to ${n}:`); 
 
outerLoop: for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) { 
            continue outerLoop;  // Skip to next i (labeled continue) 
        } 
    } 
    console.log(i); 
}