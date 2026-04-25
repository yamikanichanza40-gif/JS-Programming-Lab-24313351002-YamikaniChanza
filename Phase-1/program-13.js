console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-13] - [Multiple conditions with switch]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 13: Multiple conditions with switch
let dayNumber = parseInt(prompt("Enter a day number (1-7):")); 
let dayName; 
switch(dayNumber) { 
    case 1: 
        dayName = "Monday"; 
        break; 
    case 2: 
        dayName = "Tuesday"; 
        break; 
    case 3: 
        dayName = "Wednesday"; 
        break; 
    case 4: 
        dayName = "Thursday"; 
        break; 
    case 5: 
        dayName = "Friday"; 
        break;  
    case 6: 
        dayName = "Saturday"; 
        break; 
    case 7: 
        dayName = "Sunday"; 
        break; 
    default: 
        dayName = "Invalid day number!"; 
} 
console.log(`Day ${dayNumber} is ${dayName}`)

// Switch with multiple cases 
let grade = prompt("Enter letter grade (A, B, C, D, F):").toUpperCase(); 
let message; 
 
switch(grade) { 
    case "A": 
        message = "Outstanding!"; 
        break; 
    case "B": 
    case "C": 
        message = "Good job!"; 
        break; 
    case "D": 
        message = "You passed."; 
        break; 
    case "F": 
        message = "Better luck next time."; 
        break; 
    default: 
        message = "Invalid grade."; 
} 