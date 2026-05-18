console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-44] - [Array search and testing methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 44: Array search and testing methods
const users = [
 { id: 1, name: 'Alice', age: 25, active: true },
 { id: 2, name: 'Bob', age: 30, active: false },
 { id: 3, name: 'Charlie', age: 35, active: true },
 { id: 4, name: 'David', age: 28, active: true },
 { id: 5, name: 'Eve', age: 22, active: false }
];
const numbers = [10, 25, 30, 45, 60, 75, 80];
console.log("--- find() - returns first matching element ---");
const userOver30 = users.find(user => user.age > 30);
console.log("First user over 30:", userOver30);
const inactiveUser = users.find(u => !u.active);
console.log("First inactive user:", inactiveUser);
const notFound = users.find(u => u.age > 100);
console.log("Not found result:", notFound);
console.log("\n--- findIndex() - returns index of first match ---");
const indexOver30 = users.findIndex(user => user.age > 30);
console.log("Index of first user over 30:", indexOver30);
const indexNotFound = users.findIndex(u => u.age > 100);
console.log("Index when not found:", indexNotFound);
console.log("\n--- findLast() and findLastIndex() (ES2023+) ---");
if (typeof Array.prototype.findLast === 'function') {
 const lastActive = users.findLast(u => u.active);
 console.log("Last active user:", lastActive);
 console.log("Last active index:", users.findLastIndex(u => u.active));
}
console.log("\n--- some() - checks if ANY element matches ---");
const hasInactiveUsers = users.some(user => !user.active);
console.log("Has inactive users:", hasInactiveUsers);
const hasSeniorCitizen = users.some(user => user.age >= 65);
console.log("Has senior citizen:", hasSeniorCitizen);
const hasLargeNumber = numbers.some(num => num > 100);
console.log("Has number > 100:", hasLargeNumber);
console.log("\n--- every() - checks if ALL elements match ---");
const allActive = users.every(user => user.active);
console.log("All users active:", allActive);
const allAdults = users.every(user => user.age >= 18);
console.log("All users are adults:", allAdults);
const allPositive = numbers.every(num => num > 0);
console.log("All numbers positive:", allPositive);
console.log("\n--- includes() - simple value check ---");
const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log("Includes 'banana':", fruits.includes('banana'));
console.log("Includes 'grape':", fruits.includes('grape'));
console.log("Includes 'banana' from index 2:", fruits.includes('banana', 2));
console.log("\n--- Combining search methods ---");
function findUserByProperty(users, property, value) {
 return users.find(user => user[property] === value);
}
console.log("User with id 3:", findUserByProperty(users, 'id', 3));
console.log("User named 'Eve':", findUserByProperty(users, 'name', 'Eve'));
console.log("\n--- Practical example: Form validation ---");
const formFields = [
 { name: 'username', value: 'john_doe', required: true },
 { name: 'email', value: 'john@example.com', required: true },
 { name: 'age', value: 25, required: true },
 { name: 'phone', value: '', required: false }
];
const allRequiredFilled = formFields
 .filter(field => field.required)
 .every(field => field.value !== '');
console.log("All required fields filled:", allRequiredFilled);
const firstEmptyRequired = formFields.find(field => field.required &&
!field.value);
console.log("First empty required field:", firstEmptyRequired?.name ||
'none');
