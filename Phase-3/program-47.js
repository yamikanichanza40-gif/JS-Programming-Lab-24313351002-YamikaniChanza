console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: [Yamikani Chanza]");
console.log("ID: [24313351002]");
console.log("PROGRAM: [program-47] - [Working with 2D and 3D arrays]");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("[24313351002]" + Date.now()).substring(0, 12));
console.log("=".repeat(55));

// Program 47: Working with 2D and 3D arrays
console.log("--- Creating 2D Arrays ---");
const matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];
console.log("Matrix:");
matrix.forEach(row => console.log(row));
console.log("\n--- Accessing elements ---");
console.log("matrix[0][0]:", matrix[0][0]); // 1
console.log("matrix[1][2]:", matrix[1][2]); // 6
console.log("matrix[2][1]:", matrix[2][1]); // 8
console.log("\n--- Iterating 2D array ---");
console.log("Row by row:");
for (let i = 0; i < matrix.length; i++) {
 for (let j = 0; j < matrix[i].length; j++) {
 console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
 }
}
console.log("\n--- Creating dynamic 2D array ---");
function create2DArray(rows, cols, initialValue = 0) {
 return Array.from({ length: rows },
 () => Array.from({ length: cols }, () => initialValue));
}
const grid = create2DArray(3, 4, '.');
console.log("3x4 grid:");
grid.forEach(row => console.log(row.join(' ')));
console.log("\n--- Tic-Tac-Toe Board ---");
let board = create2DArray(3, 3, ' ');
board[0][0] = 'X';
board[1][1] = 'O';
board[2][2] = 'X';
console.log("Tic-Tac-Toe:");
console.log(' ' + board[0].join(' | '));
console.log('---+---+---');
console.log(' ' + board[1].join(' | '));
console.log('---+---+---');
console.log(' ' + board[2].join(' | '));
console.log("\n--- Matrix Operations ---");
function transpose(matrix) {
 return matrix[0].map((_, colIndex) =>
 matrix.map(row => row[colIndex])
 );
}
console.log("Original matrix:");
matrix.forEach(row => console.log(row));
console.log("\nTransposed:");
const transposed = transpose(matrix);
transposed.forEach(row => console.log(row));
console.log("\n--- 3D Array Example ---");
const cube = [
 [ // Layer 0
 [1, 2],
 [3, 4]
 ],
 [ // Layer 1
 [5, 6],
 [7, 8]
 ]
];
console.log("3D Array (2x2x2):");
console.log("cube[0][0][0]:", cube[0][0][0]); // 1
console.log("cube[1][1][1]:", cube[1][1][1]); // 8
console.log("\n--- Practical: Grade Book ---");
const gradeBook = [
 ['Student', 'Math', 'Science', 'English', 'Average'],
 ['Alice', 85, 92, 88],
 ['Bob', 78, 85, 90],
 ['Charlie', 92, 88, 85],
 ['David', 88, 90, 92]
];
// Calculate averages
for (let i = 1; i < gradeBook.length; i++) {
 const scores = gradeBook[i].slice(1);
 const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
 gradeBook[i].push(avg.toFixed(1));
 }
// Display grade book
console.log("\nGrade Book:");
gradeBook.forEach(row => {
 console.log(row.map(cell =>
 cell.toString().padStart(10, ' ')
 ).join(''));
});
console.log("\n--- Flattening arrays ---");
const nested = [[1, 2], [3, 4, [5, 6]], [7, 8]];
console.log("Nested:", nested);
console.log("flat():", nested.flat());
console.log("flat(2):", nested.flat(2));
console.log("flat(Infinity):", nested.flat(Infinity));
