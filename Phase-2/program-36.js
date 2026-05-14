console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-36] - [Class inheritance using extends and super]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 36: Class inheritance using extends and super
// Parent class
class Vehicle {
 constructor(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this._speed = 0;
  this._engine = false;
 }

 startEngine() {
  if (!this._engine) {
   this._engine = true;
   console.log(`${this.make} ${this.model} engine started.`);
  } else {
   console.log("Engine is already running.");
  }
 }

 stopEngine() {
  if (this._engine) {
   this._engine = false;
   this._speed = 0;
   console.log(`${this.make} ${this.model} engine stopped.`);
  } else {
   console.log("Engine is already off.");
  }
 }

 accelerate(amount) {
  if (this._engine) {
   this._speed += amount;
   console.log(`Accelerating to ${this._speed} km/h`);
  } else {
   console.log("Start the engine first!");
  }
 }

 brake(amount) {
  this._speed = Math.max(0, this._speed - amount);
  console.log(`Braking to ${this._speed} km/h`);
 }

 get speed() {
  return this._speed;
 }

 getInfo() {
  return `${this.year} ${this.make} ${this.model}`;
 }
}

// Car class
class Car extends Vehicle {
 constructor(make, model, year, doors, fuelType) {
  super(make, model, year);
  this.doors = doors;
  this.fuelType = fuelType;
  this._trunkOpen = false;
 }

 openTrunk() {
  this._trunkOpen = true;
  console.log("Trunk opened.");
 }

 closeTrunk() {
  this._trunkOpen = false;
  console.log("Trunk closed.");
 }

 getInfo() {
  return `${super.getInfo()} - ${this.doors} doors, ${this.fuelType}`;
 }

 accelerate(amount) {
  super.accelerate(amount);
  if (this.speed > 120) {
   console.log("Warning: High speed detected!");
  }
 }
}

// Motorcycle class
class Motorcycle extends Vehicle {
 constructor(make, model, year, type) {
  super(make, model, year);
  this.type = type;
  this._helmetOn = false;
 }

 putOnHelmet() {
  this._helmetOn = true;
  console.log("Helmet on - safe to ride!");
 }

 startEngine() {
  if (this._helmetOn) {
   super.startEngine();
  } else {
   console.log("Put on your helmet first!");
  }
 }

 wheelie() {
  if (this._engine && this._speed > 20) {
   console.log("Doing a wheelie!");
  } else {
   console.log("Need more speed for a wheelie!");
  }
 }

 getInfo() {
  return `${super.getInfo()} - ${this.type} Motorcycle`;
 }
}