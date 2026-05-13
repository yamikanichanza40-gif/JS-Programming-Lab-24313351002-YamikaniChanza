console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-31] - [Creating objects with object literals]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 31: Creating objects with object literals
// Basic object literal
const book = {
 title: "The Great Gatsby",
 author: "F. Scott Fitzgerald",
 year: 1925,
 genre: "Novel",

 // Method
 getDescription: function() {
 return `${this.title} by ${this.author} (${this.year})`;
 },

 // Shorthand method syntax (ES6+)
 updateYear(newYear) {
 this.year = newYear;
 console.log(`Year updated to ${newYear}`);
 }
};
console.log("Book object:", book);
console.log("Description:", book.getDescription());
// Accessing properties
console.log("\nAccessing Properties:");
console.log("Dot notation:", book.title);
console.log("Bracket notation:", book["author"]);
// Adding new properties
book.publisher = "Scribner";
book["ISBN"] = "978-0743273565";
console.log("\nAfter adding properties:", book);
// Deleting properties
delete book.genre;
console.log("\nAfter deleting genre:", book);
// Checking property existence
console.log("\nProperty Checks:");
console.log("Has 'author'?", "author" in book); // true
console.log("Has 'genre'?", "genre" in book); // false
console.log("Has 'toString'?", "toString" in book); // true (inherited)
console.log("Own property 'toString'?", book.hasOwnProperty("toString"));
// false