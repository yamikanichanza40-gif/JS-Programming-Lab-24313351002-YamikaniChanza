console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-27] - [Functions that return functions]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 27: Functions that return functions
// Function factory
function multiplyBy(factor) {
 return function(number) {
 return number * factor;
 };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
const quadruple = multiplyBy(4);
console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15
console.log("Quadruple 5:", quadruple(5)); // 20
// Function composition
function compose(f, g) {
 return function(x) {
 return f(g(x));
 };
}
const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const addOneThenDouble = compose(multiplyByTwo, addOne);
const doubleThenAddOne = compose(addOne, multiplyByTwo);
console.log("\nFunction Composition:");
console.log("addOneThenDouble(5):", addOneThenDouble(5)); // (5+1)*2= 12
console.log("doubleThenAddOne(5):", doubleThenAddOne(5)); // (5*2)+1= 11
// Currying
function curryAdd(a) {
 return function(b) {
 return function(c) {
 return a + b + c;
 };
 };
}
console.log("\nCurrying:");
console.log("curryAdd(1)(2)(3) =", curryAdd(1)(2)(3)); // 6
const addFive = curryAdd(5);
const addFiveAndTen = addFive(10);
console.log("addFiveAndTen(15) =", addFiveAndTen(15)); // 30