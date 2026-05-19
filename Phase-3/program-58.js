console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-58] - [Comprehensive Regular Expression examples]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 58: Comprehensive Regular Expression examples
console.log("--- Creating Regular Expressions ---");
// Two ways to create RegEx
const regex1 = /pattern/gi; // Literal notation
const regex2 = new RegExp('pattern', 'gi'); // Constructor
console.log("Literal:", regex1);
console.log("Constructor:", regex2);
console.log("\n--- Basic Pattern Matching ---");
// test() - returns boolean
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Valid email test:", emailRegex.test("user@example.com")); //
true
console.log("Invalid email test:", emailRegex.test("invalid-email")); // false
// exec() - returns match details
const phoneRegex = /(\d{3})-(\d{3})-(\d{4})/;
const phoneMatch = phoneRegex.exec("Call me at 123-456-7890");
console.log("Phone match:", phoneMatch);
console.log("Area code:", phoneMatch[1]);
console.log("Full match:", phoneMatch[0]);
console.log("\n--- String Methods with RegEx ---");
// match() - returns matches
const text = "The quick brown fox jumps over the lazy dog";
const vowelMatches = text.match(/[aeiou]/gi);
console.log("All vowels:", vowelMatches);
console.log("Vowel count:", vowelMatches.length);
// matchAll() - returns iterator of all matches
const dates = "2024-01-15, 2024-02-20, 2024-03-25";
const datePattern = /(\d{4})-(\d{2})-(\d{2})/g;
const dateMatches = [...dates.matchAll(datePattern)];
console.log("\nDate matches:");
dateMatches.forEach(match => {
 console.log(` Year: ${match[1]}, Month: ${match[2]}, Day:
${match[3]}`);
});
// replace() - replace matches
const censored = "This is a bad word in a sentence".replace(/bad/, "****");
console.log("\nCensored:", censored);
// replace with callback
const prices = "Items: $10.99, $25.50, $100.00";
const withTax = prices.replace(/\$(\d+\.\d{2})/g, (match, price) => {
 const withTax = parseFloat(price) * 1.1;
 return `$${withTax.toFixed(2)}`;
});
console.log("With 10% tax:", withTax);
// split() - split by regex
const csv = "apple,banana;orange|grape";
const fruits = csv.split(/[,;|]/);
console.log("\nSplit result:", fruits);
// search() - returns index of first match
const index = "Hello World".search(/world/i);
console.log("'World' found at index:", index);
console.log("\n--- RegEx Flags ---");
const flagsDemo = "Apple apple APPLE";
console.log("No flags:", flagsDemo.match(/apple/)); // ['apple']
console.log("i flag:", flagsDemo.match(/apple/i)); // ['Apple']
console.log("g flag:", flagsDemo.match(/apple/g)); // ['apple']
console.log("gi flag:", flagsDemo.match(/apple/gi)); // ['Apple', 'apple','APPLE']
console.log("\n--- Character Classes ---");// \d - digits
console.log("Digits in 'abc123def456':", 'abc123def456'.match(/\d+/g));
// \w - word characters (letters, numbers, underscore)
console.log("Words in 'hello_world 123!':", 'hello_world123!'.match(/\w+/g));
// \s - whitespace
console.log("Whitespace count in 'a b c':", 'a b\tc\nd'.match(/\s/g).length);
// \b - word boundary
console.log("Word 'cat':", 'The cat scattered'.match(/\bcat\b/g));
// Negated classes
console.log("Non-digits:", 'abc123def'.match(/\D+/g));
console.log("\n--- Quantifiers ---");
// * (0 or more), + (1 or more), ? (0 or 1)
console.log("a*:", 'aaa'.match(/a*/g));
console.log("a+:", 'aaa'.match(/a+/g));
console.log("a?:", 'aaa'.match(/a?/g));
// {n} exactly n, {n,} at least n, {n,m} between n and m
console.log("3 digits:", '12345'.match(/\d{3}/g));
console.log("2-4 digits:", '1 12 123 1234 12345'.match(/\d{2,4}/g));
console.log("\n--- Groups and Capturing ---");
// Capturing groups (...)
const nameRegex = /(\w+)\s+(\w+)/;
const nameMatch = "John Doe".match(nameRegex);
console.log("Full name:", nameMatch[0]);
console.log("First:", nameMatch[1]);
console.log("Last:", nameMatch[2]);
// Named capturing groups (?<name>...)
const namedRegex = /(?<first>\w+)\s+(?<last>\w+)/;
const namedMatch = "Jane Smith".match(namedRegex);
console.log("\nNamed groups:");
console.log("First:", namedMatch.groups.first);
console.log("Last:", namedMatch.groups.last);
// Non-capturing groups (?:...)
const nonCapture = /(?:https?:\/\/)?(?:www\.)?(\w+\.\w+)/;
const urlMatch = "https://www.example.com".match(nonCapture);
console.log("\nDomain only:", urlMatch[1]);
// Backreferences \1, \2
const repeated = "the the word word repeated".match(/(\w+)\s+\1/g);
console.log("Repeated words:", repeated);
console.log("\n--- Lookahead and Lookbehind ---");
// Positive lookahead (?=...)
console.log("Digits followed by $:");
console.log("$100 $50 $25".match(/\d+(?=\$)/g)); // Empty (no matches)
// Negative lookahead (?!...)
console.log("Digits NOT followed by $:");
console.log("100$ 50 25$".match(/\d+(?!\$)/g));
// Positive lookbehind (?<=...)
console.log("Digits after $:");
console.log("$100 $50 25$".match(/(?<=\$)\d+/g));
console.log("\n--- Practical Validation Examples ---");
const validators = {
 // Email validation
 email: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,}$/.test(value),

 // Phone (US format)
 phone: (value) => /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value),

 // URL
 url: (value) => /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value),

 // Password (8+ chars, 1 upper, 1 lower, 1 number)
 password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zAZ\d]{8,}$/.test(value),

 // ZIP code
 zipCode: (value) => /^\d{5}(-\d{4})?$/.test(value),
 // Date (YYYY-MM-DD)
 date: (value) => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(value),

 // Hex color
 hexColor: (value) => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(value),

 // Username (alphanumeric, 3-20 chars)
 username: (value) => /^[a-zA-Z0-9_]{3,20}$/.test(value)
};
console.log("\nValidation Tests:");
const tests = [
 { type: 'email', value: 'user@example.com', expected: true },
 { type: 'email', value: 'invalid-email', expected: false },
 { type: 'phone', value: '(123) 456-7890', expected: true },
 { type: 'phone', value: '123.456.7890', expected: true },
 { type: 'password', value: 'Password123', expected: true },
 { type: 'password', value: 'weak', expected: false },
 { type: 'url', value: 'https://example.com', expected: true },
 { type: 'hexColor', value: '#FF5733', expected: true },
 { type: 'zipCode', value: '12345-6789', expected: true }
]
tests.forEach(test => {
 const result = validators[test.type](test.value);
 const status = result === test.expected ? '✓' : '✗';
 console.log(`${status} ${test.type}: "${test.value}" = ${result}`);
});
console.log("\n--- Extracting Data from Text ---");
const sampleText = `
Contact Information:
John Doe - john.doe@email.com - (555) 123-4567
Jane Smith - jane.smith@company.co.uk - 555.987.6543
Bob Johnson - bjohnson@work.org - (555) 555-5555
`;
// Extract all emails
const emails = sampleText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[azA-Z]{2,}/g);
console.log("Extracted emails:", emails);
// Extract all phone numbers
const phones = sampleText.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g);
console.log("Extracted phones:", phones);
// Extract names and create objects
const contactPattern = /(\w+\s+\w+)\s*-\s*(\S+@\S+)\s*-\s*([\d\s().-]+)/g;
const contacts = [...sampleText.matchAll(contactPattern)].map(match => ({
 name: match[1],
 email: match[2],
 phone: match[3].trim()
}));
console.log("Parsed contacts:", contacts);
