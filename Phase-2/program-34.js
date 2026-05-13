console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-34] - [Understanding prototypes and inheritance]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 34: Understanding prototypes and inheritance
// Constructor with methods defined on prototype (memory efficient)
function Animal(name, species) {
 this.name = name;
 this.species = species;
}
// Adding methods to prototype (shared across all instances)
Animal.prototype.speak = function() {
 console.log(`${this.name} makes a sound.`);
};
Animal.prototype.eat = function(food) {
 console.log(`${this.name} is eating ${food}.`);
};
Animal.prototype.sleep = function() {
 console.log(`${this.name} is sleeping.`);
};
// Creating instances
const animal1 = new Animal("Leo", "Lion");
const animal2 = new Animal("Milo", "Cat");
console.log("--- Animal Instances ---");
animal1.speak();
animal1.eat("meat");
animal2.speak();
animal2.sleep();
// Checking prototype chain
console.log("\n--- Prototype Chain ---");
console.log("animal1.__proto__ === Animal.prototype:",
animal1.__proto__ === Animal.prototype); // true
console.log("Animal.prototype.__proto__ === Object.prototype:",
Animal.prototype.__proto__ === Object.prototype); // true
console.log("Object.prototype.__proto__:", Object.prototype.__proto__); //
null
// Inheritance using prototypes
function Dog(name, breed) {
 // Call parent constructor
 Animal.call(this, name, "Dog");
 this.breed = breed;
}
// Set up inheritance chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// Add methods specific to Dog
Dog.prototype.bark = function() {console.log(`${this.name} says: Woof! Woof!`);
};
// Override parent method
Dog.prototype.speak = function() {
 console.log(`${this.name} the ${this.breed} barks loudly!`);
};
const dog1 = new Dog("Rex", "German Shepherd");
const dog2 = new Dog("Buddy", "Golden Retriever");
console.log("\n--- Dog Instances ---");
dog1.speak(); // Overridden method
dog1.bark(); // Dog-specific method
dog1.eat("bones"); // Inherited method
dog2.sleep(); // Inherited method
console.log("\n--- Inheritance Check ---");
console.log("dog1 instanceof Dog:", dog1 instanceof Dog); // true
console.log("dog1 instanceof Animal:", dog1 instanceof Animal); // true
console.log("dog1 instanceof Object:", dog1 instanceof Object); // true