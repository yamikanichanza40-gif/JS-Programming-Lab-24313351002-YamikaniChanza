console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-16] - [While loop for unknown iterations]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 16: While loop for unknown iterations

// Example 1: Countdown 
console.log("Countdown:"); 
let countdown = 5; 
while (countdown > 0) { 
console.log(countdown); 
countdown--; 
} 
console.log("Blast off!"); 

// Example 2: Sum until user enters 0 

console.log("\nSum Calculator (Enter 0 to stop):"); 
let sum = 0; 
let input = 1; 
while (input !== 0) { 
input = parseInt(prompt("Enter a number (0 to exit):")); 
sum += input; 
console.log(`Current sum: ${sum}`); 
} 
console.log(`Final sum: ${sum}`); 

// Example 3: Number guessing game 
let secretNumber = Math.floor(Math.random() * 10) + 1; 
let guess; 
let attempts = 0; 
while (guess !== secretNumber) { 
guess = parseInt(prompt("Guess the number (1-10):")); 
attempts++; 
if (guess < secretNumber) { 
console.log("Too low! Try again."); 
} else if (guess > secretNumber) { 
console.log("Too high! Try again."); 
} 
} 
console.log(`Correct! The number was ${secretNumber}.`); 
console.log(`It took you ${attempts} attempts.`); 