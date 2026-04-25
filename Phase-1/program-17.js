console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-17] - [Do-while loop (executes at least once)]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 17: Do-while loop (executes at least once) 

// Example 1: Menu system 
let choice; 
do { 
    console.log("\n=== MENU ==="); 
    console.log("1. Say Hello"); 
    console.log("2. Show Date"); 
    console.log("3. Show Time"); 
    console.log("4. Exit"); 
     
    choice = parseInt(prompt("Enter your choice (1-4):")); 
     
    switch(choice) { 
        case 1: 
            console.log("Hello there!"); 
            break; 
        case 2: 
            console.log("Date:", new Date().toLocaleDateString()); 
            break; 
        case 3: 
            console.log("Time:", new Date().toLocaleTimeString()); 
            break; 
        case 4:  
            console.log("Goodbye!"); 
            break; 
        default: 
            console.log("Invalid choice. Try again."); 
    } 
} while (choice !== 4); 
 
// Example 2: Input validation 
let password; 
do { 
    password = prompt("Enter password (min 6 characters):"); 
    if (password.length < 6) { 
        console.log("Password too short! Must be at least 6 characters."); 
    } 
} while (password.length < 6); 
console.log("Password accepted!");