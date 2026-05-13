console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-30] - [Controlling 'this' with call, apply, and bind]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 30: Controlling 'this' with call, apply, and bind
const person1 = {
 firstName: "John",
 lastName: "Doe",
 getFullName: function(greeting, punctuation) {
 return `${greeting} ${this.firstName} ${this.lastName}${punctuation}`;
 }
};
const person2 = {
 firstName: "Jane",
 lastName: "Smith"
};
// call() - Invokes function with given 'this' and arguments individually
console.log("Using call():");
console.log(person1.getFullName.call(person2, "Hello", "!"));
// Hello Jane Smith!
// apply() - Same as call, but arguments passed as array
console.log("\nUsing apply():");
console.log(person1.getFullName.apply(person2, ["Hi", "!!"]));
// Hi Jane Smith!!
// bind() - Returns new function with bound 'this'
console.log("\nUsing bind():");
const getPerson2Name = person1.getFullName.bind(person2);
console.log(getPerson2Name("Hey", "..."));
// Hey Jane Smith...
const getPerson2NameWithHello = person1.getFullName.bind(person2,
"Hello");
console.log(getPerson2NameWithHello("!"));
// Hello Jane Smith!
// Practical example - Borrowing methods
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];
// Using apply to push array elements individually
Array.prototype.push.apply(numbers, moreNumbers);
console.log("\nBorrowing push method:", numbers); // [1, 2, 3, 4, 5, 6]
// Modern alternative using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log("Using spread operator:", arr1); // [1, 2, 3, 4, 5, 6]