console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-38] - [Advanced property control with descriptors]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 38: Advanced property control with descriptors
const user = {};
// Basic property definition
Object.defineProperty(user, 'username', {
 value: 'john_doe',
 writable: true,
 enumerable: true,
 configurable: true
});
// Read-only property
Object.defineProperty(user, 'id', {
 value: 'USR-' + Math.floor(Math.random() * 10000),
 writable: false, // Cannot change
 enumerable: true, // Shows in loops
 configurable: false // Cannot delete or reconfigure
});
// Property with getter and setter
let _age = 0;
Object.defineProperty(user, 'age', {
 get() {
 console.log(`Getting age: ${_age}`);
 return _age;
 },
 set(value) {
 if (value < 0) {
 console.log('Age cannot be negative!');
 } else if (value > 150) {
 console.log('Age seems unrealistic!');
 } else {console.log(`Setting age to ${value}`);
 _age = value;
 }
 },
 enumerable: true,
 configurable: true
});
// Hidden property (not enumerable)
Object.defineProperty(user, 'password', {
 value: 'secret123',
 writable: true,
 enumerable: false, // Won't show in for...in or Object.keys()
 configurable: true
});
// Computed property
Object.defineProperty(user, 'profile', {
 get() {
 return `${this.username} (ID: ${this.id}, Age: ${this.age})`;
 },
 enumerable: true,
 configurable: true
});
console.log("--- Testing Properties ---");
user.username = "johndoe_42";
console.log("Username:", user.username);
console.log("\n--- Attempting to modify id ---");
user.id = "new-id";
console.log("ID after modification attempt:", user.id); // Unchanged
console.log("\n--- Testing age setter ---");
user.age = 25; // Valid
user.age = -5; // Invalid
user.age = 200; // Invalid
console.log("Current age:", user.age);
console.log("\n--- Testing computed property ---");
console.log(user.profile);
console.log("\n--- Enumeration ---");
console.log("Object.keys():", Object.keys(user));
console.log("All properties (including non-enumerable):");
console.log("password exists?", user.password);
// Getting property descriptors
console.log("\n--- Property Descriptors ---");
const idDescriptor = Object.getOwnPropertyDescriptor(user, 'id');
console.log("ID Descriptor:", idDescriptor);
const ageDescriptor = Object.getOwnPropertyDescriptor(user, 'age');
console.log("Age Descriptor:", ageDescriptor);
// Defining multiple properties at once
const product = {};
Object.defineProperties(product, {
 name: {
 value: 'Laptop',
 writable: true,
 enumerable: true
 },
 price: {
 value: 999.99,
 writable: false,
 enumerable: true
 },
 _stock: {
 value: 50,
 writable: true,
 enumerable: false
 },
 stock: {
 get() { return this._stock; },
 set(value) {
 if (value >= 0) this._stock = value;
 },
 enumerable: true
 },
 inStock: {
 get() { return this._stock > 0; },
 enumerable: true
 }
});
console.log("\n--- Product with Multiple Properties ---");
console.log("Name:", product.name);
console.log("Price:", product.price);
console.log("Stock:", product.stock);
console.log("In Stock:", product.inStock);
// Attempting to change read-only price
product.price = 799.99;
console.log("Price after modification attempt:", product.price); // Unchanged
// Sealing and Freezing Objects
console.log("\n--- Object Sealing and Freezing ---");
const config = { theme: 'dark', notifications: true };
console.log("Original config:", config);
Object.seal(config); // Cannot add/delete, but can modify existing
config.theme = 'light';
config.newProp = 'test';
delete config.notifications;
console.log("After seal - theme changed:", config.theme);
console.log("After seal - new property added:", config.newProp); //
undefined
console.log("After seal - notification deleted:", config.notifications); // still
true
const constants = Object.freeze({ PI: 3.14159, MAX_SIZE: 1000 });
constants.PI = 3.14; // Silently ignored (or error in strict mode)
console.log("\nFrozen object PI:", constants.PI); // Unchanged