console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-51] - [Selecting DOM elements]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 51: Selecting DOM elements
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

  console.log("--- getElementById ---");

  const header = document.getElementById('main-header');

  if (header) {
    console.log("Found header:", header);
    console.log("Header text:", header.textContent);
  }

  console.log("\n--- getElementsByClassName ---");

  const items = document.getElementsByClassName('item');

  console.log("Items (HTMLCollection):", items);
  console.log("Number of items:", items.length);

  for (let i = 0; i < items.length; i++) {
    console.log(`Item ${i}:`, items[i].textContent);
  }

  console.log("\n--- getElementsByTagName ---");

  const paragraphs = document.getElementsByTagName('p');

  console.log("Paragraphs:", paragraphs);
  console.log("First paragraph:", paragraphs[0]?.textContent);

  console.log("\n--- querySelector ---");

  const firstItem = document.querySelector('.item');

  console.log("First .item:", firstItem?.textContent);

  const nestedElement = document.querySelector('.container .nested');

  console.log("Nested element:", nestedElement?.textContent);

});