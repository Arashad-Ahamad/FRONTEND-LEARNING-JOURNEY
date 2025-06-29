// Logical Operators in JavaScript: Numbers, Strings & Truthy/Falsy Values

console.log(" AND (&&) Operator:");
// Rule: Returns the first falsy value, if all are truthy, returns the last one.
console.log(0 && 5); // Output: 0   (First falsy found, returned)
console.log(3 && 7); // Output: 7   (Both truthy, last value returned)
console.log(8 && 0); // Output: 0   (First truthy, but second is falsy, so it is returned)
console.log(5 && 10); // Output: 10  (Both truthy, last value returned)
console.log(0 && 0); // Output: 0   (First falsy found, returned)

console.log(" OR (||) Operator:");
// Rule: Returns the first truthy value, if all are falsy, returns the last one.
console.log(0 || 5); // Output: 5   (First falsy, second truthy, so return second value)
console.log(3 || 7); // Output: 3   (First truthy, returned)
console.log(0 || 0); // Output: 0   (Both falsy, last falsy returned)
console.log(8 || 0); // Output: 8   (First truthy, returned)
console.log(0 || 10); // Output: 10  (First falsy, second truthy, so return second value)

console.log(" NOT (!) Operator:");
// Rule: Converts truthy to false, falsy to true.
console.log(!0); // Output: true  (0 is falsy, NOT makes it true)
console.log(!5); // Output: false (5 is truthy, NOT makes it false)
console.log(!-10); // Output: false (-10 is truthy, NOT makes it false)
console.log(!""); // Output: true  (Empty string is falsy, NOT makes it true)
console.log(!"Hello"); // Output: false (String is truthy, NOT makes it false)

console.log("Mix Practice");
// Mix Practice

const andResult = 0 && 5;
console.log(andResult); // Output: 0

const orResult = 0 || 9;
console.log(orResult); // Output: 9

const andResult2 = "" && "Hello";
console.log(andResult2); //Output: ''   (empty string)

const orResult2 = undefined || "Hello";
console.log(orResult2); // Output: Hello

const andResult3 = "Hello" && null;
console.log(andResult3); // Output: null

const orResult3 = "Hello" || null;
console.log(orResult3); // Output: Hello

const andResult4 = "Hello" && 4 + 5;
console.log(andResult4); // Output: 9

const orResult4 = "Hello" || 9 + 12;
console.log(orResult4); // Output: Hello

const andResult5 = "Hello" && -4 + 4;
console.log(andResult5); // Output: 0

const orResult5 = "" || -4 + 4;
console.log(orResult5); // Output: 0
const orResult6 = "" || 4 + 4 * 5;
console.log(orResult6); // Output: 24

// Case 1: Just executing the AND operation
const andResult7 = "Hello World" && console.log("Hello");
// Step 1: 'Hello World' is a truthy value, so JavaScript evaluates the next expression.
// Step 2: console.log('Hello') executes and prints "Hello" to the console.
// Step 3: console.log() does not return any value; it returns `undefined`.
// Step 4: Since && returns the last evaluated value, andResult7 gets `undefined`.

console.log(andResult7);
// Step 5: Printing andResult7, which is `undefined`.

// Final Console Output:
// Hello       (printed by console.log('Hello'))
// undefined   (printed by console.log(andResult7))

const orResult7 = "Hello World" || console.log("Hello");
console.log(orResult7); // Output: Hello World
const userAge = 25;
console.log(userAge >= 18 && userAge <= 24); // Output: false

const userAge2 = 22;
console.log(userAge2 >= 18 && userAge2 <= 24); // Output: true

const userAge3 = 18;
console.log(userAge3 >= 18 && userAge3 <= 24); // Output: true

const userAge4 = 24;
console.log(userAge4 >= 18 && userAge4 <= 24); // Output: true

const userAge5 = 20;
const isCollegeStudent = userAge5 >= 18 && userAge5 <= 24;
console.log(isCollegeStudent); // Output: true

const userAge6 = 7;
const isSchoolStudent = userAge6 >= 5 && userAge6 <= 18;
console.log(isSchoolStudent); // Output: true

const student = isCollegeStudent || isSchoolStudent;
console.log(student); // Output: true

// Example 1: Falsy values
console.log(!false); // Output: true
console.log(!0); // Output: true
console.log(!""); // Output: true
console.log(!null); // Output: true
console.log(!undefined); // Output: true
console.log(!NaN); // Output: true

// Example 2: Truthy values
console.log(!true); // Output: false
console.log(!42); // Output: false
console.log(!"Hello"); // Output: false
console.log(![]); // Output: false (Empty array is truthy)
console.log(!{}); // Output: false (Empty object is truthy)

// Example 3: Double NOT (!!) to convert to boolean
console.log(!!"Hello"); // Output: true  (Truthy value)
console.log(!!0); // Output: false (Falsy value)
console.log(!!null); // Output: false (Falsy value)
console.log(!!""); // Output: false (Falsy value)
console.log(!!123); // Output: true  (Truthy value)