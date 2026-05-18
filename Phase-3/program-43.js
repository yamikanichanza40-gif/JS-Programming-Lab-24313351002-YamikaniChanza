console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-43] - [Array reduction methods]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 43: Array reduction methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const transactions = [
 { type: 'deposit', amount: 500 },
 { type: 'withdrawal', amount: 200 },
 { type: 'deposit', amount: 300 },
 { type: 'withdrawal', amount: 100 },
 { type: 'deposit', amount: 150 }
];
console.log("--- Basic reduce ---");
const sum = numbers.reduce((accumulator, current) => accumulator +
current, 0);
console.log("Sum of numbers:", sum);
const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log("Product of numbers:", product);
console.log("\n--- reduce without initial value ---");
const max = numbers.reduce((acc, cur) => cur > acc ? cur : acc);
console.log("Maximum value:", max);
const min = numbers.reduce((acc, cur) => cur < acc ? cur : acc);
console.log("Minimum value:", min);
console.log("\n--- reduce with objects ---");
const balance = transactions.reduce((acc, transaction) => {
 if (transaction.type === 'deposit') {
 return acc + transaction.amount;
 } else {
 return acc - transaction.amount;
 }
}, 0);
console.log("Final balance:", balance);
console.log("\n--- reduce for grouping ---");
const groupedByType = transactions.reduce((acc, t) => {
 if (!acc[t.type]) acc[t.type] = [];
 acc[t.type].push(t.amount);
 return acc;
}, {});
console.log("Grouped by type:", groupedByType);
console.log("\n--- reduce for counting ---");
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCounts = items.reduce((acc, item) => {
 acc[item] = (acc[item] || 0) + 1;
 return acc;
}, {});
console.log("Item counts:", itemCounts);
console.log("\n--- reduce for flattening ---");
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened array:", flattened);
console.log("\n--- reduceRight (right-to-left) ---");
const words = ['World', 'Hello'];
const sentence = words.reduceRight((acc, word) => acc + ' ' + word);
console.log("reduceRight result:", sentence);
console.log("\n--- Complex reduce example: Pipeline ---");
const pipeline = [
 (x) => x + 10,
 (x) => x * 2,
 (x) => x - 5,
 (x) => x / 3
];
const result = pipeline.reduce((value, fn) => fn(value), 5);
console.log("Pipeline result for 5:", result);