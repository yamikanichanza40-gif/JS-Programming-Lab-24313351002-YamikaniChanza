console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-12] - [ Nested conditional statements]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 12: Nested conditional statements
let age = parseInt(prompt("Enter your age:")); 
let hasLicense = prompt("Do you have a driver's license? (yes/no)").toLowerCase(); 
if (age >= 18) { 
    console.log("You are old enough to drive."); 
     
    if (hasLicense === "yes") { 
        console.log("You can legally drive a car."); 
    } else if (hasLicense === "no") { 
        console.log("You need to get a license first."); 
    } else { 
        console.log("Invalid input for license."); 
    } 
} else if (age >= 16) { 
    console.log("You can get a learner's permit."); 
     
    if (hasLicense === "yes") { 
        console.log("You may drive with supervision."); 
    } else {
        console.log("Apply for a learner's permit."); 
    } 
} else { 
    console.log("You are too young to drive."); 
}