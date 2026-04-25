console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-11] - [Conditional execution with if-else]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");

// Program 11: Conditional execution with if-else 

    let score = parseInt(prompt("Enter your test score (0-100):")); 
if (score >= 90) { 
console.log("Grade: A - Excellent!"); 
} else if (score >= 80) { 
console.log("Grade: B - Very Good!"); 
} else if (score >= 70) { 
console.log("Grade: C - Good!"); 
} else if (score >= 60) { 
console.log("Grade: D - Passing!"); 
} else { 
console.log("Grade: F - Needs Improvement."); 
}
console.log(`Your score: ${score}`);