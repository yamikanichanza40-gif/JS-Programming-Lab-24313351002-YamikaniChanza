console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-37] - [Object.create() for prototypal inheritance]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 37: Object.create() for prototypal inheritance
// Base object (acts as prototype)
const animalProto = {
 init(name, species) {
 this.name = name;
 this.species = species;
 return this;
 },

 speak() {
 console.log(`${this.name} makes a sound.`);
 },

 eat(food) {
 console.log(`${this.name} is eating ${food}.`);
 },

 describe() {return `${this.name} is a ${this.species}`;
 }
};
// Create objects using Object.create()
const animal1 = Object.create(animalProto).init("Leo", "Lion");
const animal2 = Object.create(animalProto).init("Milo", "Cat");
console.log("--- Objects from animalProto ---");
console.log(animal1.describe());
animal1.speak();
animal1.eat("meat");
console.log(animal2.describe());
animal2.speak();
// Creating a specialized prototype
const dogProto = Object.create(animalProto);
// Add methods specific to dogs
dogProto.bark = function() {
 console.log(`${this.name} says: Woof!`);
};
// Override speak method
dogProto.speak = function() {console.log(`${this.name} barks loudly!`);
};
// Custom init for dogs
dogProto.init = function(name, breed) {
 animalProto.init.call(this, name, "Dog");
 this.breed = breed;
 return this;
};
dogProto.describe = function() {
 return `${this.name} is a ${this.breed} ${this.species}`;
};
// Create dog instances
const dog1 = Object.create(dogProto).init("Rex", "German Shepherd");
const dog2 = Object.create(dogProto).init("Buddy", "Golden Retriever");
console.log("\n--- Dog Instances ---");
console.log(dog1.describe());
dog1.speak();
dog1.bark();
dog1.eat("bones");
console.log(dog2.describe());
dog2.speak();
// Even deeper inheritance chain
const guardDogProto = Object.create(dogProto);
guardDogProto.guard = function() {
 console.log(`${this.name} is guarding the house!`);
};
guardDogProto.init = function(name, breed, trainingLevel) {
 dogProto.init.call(this, name, breed);
 this.trainingLevel = trainingLevel;
 return this;
};
const guardDog = Object.create(guardDogProto).init("Max", "Rottweiler",
"Advanced");
console.log("\n--- Guard Dog Instance ---");
console.log(guardDog.describe());
console.log("Training level:", guardDog.trainingLevel);
guardDog.speak();
guardDog.guard();
// Checking prototype chain
console.log("\n--- Prototype Chain Check ---");
console.log("guardDogProto.isPrototypeOf(guardDog):",
guardDogProto.isPrototypeOf(guardDog)); // true
console.log("dogProto.isPrototypeOf(guardDog):",
dogProto.isPrototypeOf(guardDog)); // true
console.log("animalProto.isPrototypeOf(guardDog):",
animalProto.isPrototypeOf(guardDog)); // true
// Object.create(null) - creates object with no prototype
const dictionary = Object.create(null);
dictionary.hello = "A greeting";
dictionary.world = "The planet Earth";
console.log("\n--- Object without prototype ---");
console.log("dictionary.hello:", dictionary.hello);
console.log("dictionary.toString:", dictionary.toString); // undefined
console.log("'toString' in dictionary:", "toString" in dictionary); // false