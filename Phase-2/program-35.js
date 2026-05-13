console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-35] - [Modern class syntax (ES6+)]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 35: Modern class syntax (ES6+)
class Person {
 // Class field (modern syntax)
 species = "Homo Sapiens";

 // Constructor
 constructor(firstName, lastName, age) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
 this._email = ""; // Convention for "private" property
 }

 // Instance method
 getFullName() {
 return `${this.firstName} ${this.lastName}`;
 }

 // Instance method
 introduce() {
 return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`;
 }

 // Instance method
 celebrateBirthday() {
 this.age++;
 console.log(`Happy Birthday ${this.firstName}! You are now
${this.age} years old.`);
}

 // Getter
 get email() {
 return this._email;
 }

 // Setter with validation
 set email(value) {
 if (value.includes("@") && value.includes(".")) {
 this._email = value;
 } else {
 console.log("Invalid email address!");
 }
 }

 // Static method (called on class, not instance)
 static createAnonymous() {
 return new Person("Anonymous", "User", 0);
 }

 // Static property
 static speciesCount = 0;
}
// Creating instances
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
console.log("--- Person Instances ---");
console.log(person1.introduce());
console.log(person2.introduce());
console.log("\n--- Birthday Celebration ---");
person1.celebrateBirthday();
person1.celebrateBirthday();
console.log("\n--- Email Testing ---");
person1.email = "john.doe@example.com";
console.log("Valid email set:", person1.email);
person1.email = "invalid-email";
console.log("Email after invalid attempt:", person1.email);
console.log("\n--- Static Methods ---");
const anonymous = Person.createAnonymous();
console.log(anonymous.introduce());
console.log("\n--- Class Fields ---");
console.log("person1.species:", person1.species);
console.log("person2.species:", person2.species);