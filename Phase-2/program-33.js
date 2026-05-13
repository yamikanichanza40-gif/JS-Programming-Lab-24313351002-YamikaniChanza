console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-33] - [Creating objects with constructor functions]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 33: Creating objects with constructor functions
// Constructor function (convention: starts with capital letter)
function Car(make, model, year, color) {
 // Properties
 this.make = make;
 this.model = model;
 this.year = year;
 this.color = color;
 this.isRunning = false;
 this.mileage = 0;

 // Method
 this.start = function() {
 if (!this.isRunning) {
 this.isRunning = true;
 console.log(`${this.make} ${this.model} started.`);
 } else {
 console.log(`${this.make} ${this.model} is already running.`);
 }
 };

 this.stop = function() {
 if (this.isRunning) {
 this.isRunning = false;
 console.log(`${this.make} ${this.model} stopped.`);
 } else {
 console.log(`${this.make} ${this.model} is already stopped.`);
 }
 };

 this.drive = function(distance) {
 if (this.isRunning) {
 this.mileage += distance;
 console.log(`${this.make} ${this.model} drove ${distance} miles.
Total mileage: ${this.mileage}`);
 } else {
 console.log(`Cannot drive. ${this.make} ${this.model} is not
running.`);
 }
 };

 this.getInfo = function() {
 return `${this.year} ${this.color} ${this.make} ${this.model} -
${this.mileage} miles`;
 };
}
// Creating instances with 'new' keyword
const car1 = new Car("Toyota", "Camry", 2020, "Silver");
const car2 = new Car("Honda", "Civic", 2022, "Red");
const car3 = new Car("Tesla", "Model 3", 2023, "Blue");
console.log("Car 1:", car1.getInfo());
console.log("Car 2:", car2.getInfo());
console.log("Car 3:", car3.getInfo());
console.log("\n--- Testing Car 1 ---");
car1.start();
car1.drive(50);
car1.drive(30);
car1.stop();
car1.drive(10); // Won't work - car is stopped
console.log("\n--- Updated Car 1 Info ---");
console.log(car1.getInfo());
// Checking constructor property
console.log("\n--- Constructor Check ---");
console.log("car1.constructor === Car:", car1.constructor === Car); //
true
console.log("car1 instanceof Car:", car1 instanceof Car); // true
console.log("car1 instanceof Object:", car1 instanceof Object); // true