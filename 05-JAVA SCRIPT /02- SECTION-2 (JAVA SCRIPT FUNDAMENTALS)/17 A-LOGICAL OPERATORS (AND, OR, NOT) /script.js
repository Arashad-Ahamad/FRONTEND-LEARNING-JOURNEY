// Logical Operators in JavaScript

// AND (&&) → Both conditions must be true to return true
console.log(true && true);   // true 
console.log(true && false);  // false 
console.log(false && true);  // false 
console.log(false && false); // false 

// Example with variables
const age = 25;
const hasLicense = true;
console.log(age >= 18 && hasLicense); // true  (Both are true)

const age2 = 16;
const hasLicense2 = true;
console.log(age2 >= 18 && hasLicense2); // false  (One condition is false)

const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend); // false  (One is false)


// OR (||) → If at least one condition is true, the result is true
console.log(true || true);   // true 
console.log(true || false);  // true 
console.log(false || true);  // true 
console.log(false || false); // false 

// Example with variables
const hasJob = false;
const hasSavings = true;
console.log(hasJob || hasSavings); // true  (At least one is true)

const isRaining = false;
const hasUmbrella = false;
console.log(isRaining || hasUmbrella); // false  (Both are false)

const isTired = true;
const hasCoffee = false;
console.log(isTired || hasCoffee); // true  (One is true)


// NOT (!) → Reverses the boolean value
console.log(!true);  // false 
console.log(!false); // true 

// Example with variables
let isOnline = true;
console.log(!isOnline); // false  (Reverses true to false)

let isSleeping = false;
console.log(!isSleeping); // true  (Reverses false to true)

let hasPermission = true;
console.log(!hasPermission); // false  (Reverses true to false)



// Logical Operators with Onely Numbers

console.log(" AND (&&) Operator:");
        // Rule: Returns the first falsy value, if all are truthy, returns the last one.
        console.log(0 && 5);   // Output: 0   (First falsy found, returned)
        console.log(3 && 7);   // Output: 7   (Both truthy, last value returned)
        console.log(8 && 0);   // Output: 0   (First truthy, but second is falsy, so it is returned)
        console.log(5 && 10);  // Output: 10  (Both truthy, last value returned)
        console.log(0 && 0);   // Output: 0   (First falsy found, returned)

        console.log(" OR (||) Operator:");
        // Rule: Returns the first truthy value, if all are falsy, returns the last one.
        console.log(0 || 5);   // Output: 5   (First falsy, second truthy, so return second value)
        console.log(3 || 7);   // Output: 3   (First truthy, returned)
        console.log(0 || 0);   // Output: 0   (Both falsy, last falsy returned)
        console.log(8 || 0);   // Output: 8   (First truthy, returned)
        console.log(0 || 10);  // Output: 10  (First falsy, second truthy, so return second value)

        console.log(" NOT (!) Operator:");
        // Rule: Converts truthy to false, falsy to true.
        console.log(!0);       // Output: true  (0 is falsy, NOT makes it true)
        console.log(!5);       // Output: false (5 is truthy, NOT makes it false)
        console.log(!-10);     // Output: false (-10 is truthy, NOT makes it false)
        console.log(!"");      // Output: true  (Empty string is falsy, NOT makes it true)
        console.log(!"Hello"); // Output: false (String is truthy, NOT makes it false)