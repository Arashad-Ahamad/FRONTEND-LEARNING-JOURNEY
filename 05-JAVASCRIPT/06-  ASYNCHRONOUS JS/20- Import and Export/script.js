// ------------------------------
// Imports & Usage
// ------------------------------

// Example 1 usage: normal import
import { pi, add, subtract } from './app.js';
console.log(pi);             // 3.1
console.log(add(3, 4));      // 7
console.log(subtract(5, 4)); // 1

// Example 2 usage: normal import
import { a, greet, b } from './app.js';
console.log(a);              // Arshad
console.log(greet(3, 5));    // 15
console.log(b);              // 10

// Example 3 usage: renamed import
import { sum } from './app.js';
console.log(sum(5, 20));     // 25
// Note: sum is renamed from addition while exporting

// Example 4 usage: renamed import
import { sub as subtractNumbers } from './app.js';
console.log(subtractNumbers(10, 5)); // 5
// Note: sub is renamed to subtractNumbers during import

// Example 5:  Imports Default 
import multiply from './app.js';
console.log(multiply(2, 2));

// Example 6:
import hi from './math.js'
console.log(hi(2, 3));

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// Example 7:
import productsData from './productData.js'
console.log(productsData);

// Example 8:
import { usersData } from './userData.js';
console.log(usersData);