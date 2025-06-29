// --------------------------
// Number System in JavaScript
// --------------------------

// Decimal Numbers (By default)
console.log(10);       // Positive integer
console.log(-8);       // Negative integer4
console.log(8.7);      // Positive float
console.log(-2.6);     // Negative float
console.log(999);      // Integer

// Integer Numbers
console.log(10);       // Integer Number
console.log(100);      // Integer Number
console.log(-10);      // Integer Number

// Float Numbers (Decimal values)
console.log(3.14);     // Float Number
console.log(0.5);      // Float Number
console.log(100.0);    // Float Number (looks like integer but is float)
console.log(-2.75);    // Float Number

// Example 1: Decimal Numbers (default)
let age = 21;          // Integer
let pi = 3.14;         // Float
console.log(typeof age);  // number
console.log(typeof pi);   // number

// Example 2: Binary Number (prefix: 0b)
let bin = 0b1010;      // Binary of 10
console.log(bin);      // Output: 10
console.log(typeof bin);  // number

// Example 3: Octal Number (prefix: 0o)
let oct = 0o77;        // Octal of 63
console.log(oct);      // Output: 63
console.log(typeof oct);  // number

// Example 4: Hexadecimal Number (prefix: 0x)
let hex = 0xA3;        // Hex of 163
console.log(hex);      // Output: 163
console.log(typeof hex);  // number

// --------------------------
// Number Object vs Primitive
// --------------------------

// Primitive Numbers (normal numbers)
console.log(3);
console.log(-8);
console.log(2.5);
console.log(-0.5);
console.log(500);

let n = 50;
let a = 10;
console.log(a);           // 10
console.log(typeof a);    // number

// Number Object (rarely used, behaves differently)
let x = new Number(8);
let y = new Number(10);
console.log(x);           // [Number: 8]
console.log(y);           // [Number: 10]
console.log(typeof x);    // object
console.log(typeof y);    // object

// --------------------------
// Special Values
// --------------------------

// NaN (Not a Number)
console.log('Hello' / 5);     // NaN
console.log(undefined + 10);  // NaN
console.log(0 / 0);           // NaN
console.log(typeof NaN);      // number

// isNaN() - checks if value is NaN (does type coercion)
console.log(isNaN('Hello'));      // true (not a number)
console.log(isNaN('NaN'));        // true (string is not a number)
console.log(isNaN(123));          // false
let s = 5 * 'Hello';              // NaN
console.log(isNaN(s));            // true

// Infinity and -Infinity
console.log(1 / 0);               // Infinity
console.log(17887 ** 3783283283299); // Infinity (very large number)
console.log(-1 / 0);              // -Infinity

// isFinite() - checks if value is a finite number (after coercion)
console.log(isFinite(100));       // true
console.log(isFinite(0));         // true
console.log(isFinite(-990));      // true
console.log(isFinite('abc'));     // false
console.log(isFinite(NaN));       // false
console.log(isFinite(Infinity));  // false

// Number() - converts value to number
console.log(Number('123'));       // 123
console.log(Number('abc'));       // NaN
console.log(Number('-999'));      // -999
console.log(Number(true));        // 1
console.log(Number(false));       // 0

// toString() - converts number to string
let mark = 17;
console.log(mark.toString());     // "17"

// --------------------------
// Constants (Static Properties)
// --------------------------

console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);   // -9007199254740991
console.log(Number.MAX_VALUE);          // Largest possible number
console.log(Number.MAX_VALUE * 2);      // Infinity
console.log(Number.MIN_VALUE);          // Smallest possible number > 0
console.log(Number.MIN_VALUE > 0);      // true
console.log(10 / 0);                    // Infinity
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(-20 / 0);                   // -Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(Number.NaN);                // NaN
console.log(Number.isNaN(NaN));         // true

// --------------------------
// Methods of Number
// --------------------------

// Number.isFinite() - strict check (no type coercion)
console.log(Number.isFinite(10));         // true
console.log(Number.isFinite(-30));        // true
console.log(Number.isFinite(1.6));        // true
console.log(Number.isFinite(-0.6));       // true
console.log(Number.isFinite('10'));       // false
console.log(Number.isFinite('Hello'));    // false
console.log(Number.isFinite(NaN));        // false
console.log(Number.isFinite(Infinity));   // false

// Number.isNaN() - strict check (only true if value is NaN)
console.log(Number.isNaN('Hello'));       // false
console.log(Number.isNaN(NaN));           // true
console.log(Number.isNaN(123));           // false

// Number.isInteger() - checks for integers
console.log(Number.isInteger(20));        // true
console.log(Number.isInteger(-500));      // true
console.log(Number.isInteger('50'));      // false
console.log(Number.isInteger(2.7));       // false

// Number.isSafeInteger() - checks for safe integers
console.log(Number.isSafeInteger(100));           // true
console.log(Number.isSafeInteger(273239827829988288)); // false

// parseInt() - parses integer from string (reads till first invalid char)
console.log(parseInt('123'));          // 123
console.log(parseInt('155.890'));      // 155
console.log(parseInt('1.6'));          // 1
console.log(parseInt('abc'));          // NaN

// parseFloat() - parses float from string
console.log(parseFloat(10.55));        // 10.55
console.log(parseFloat('42'));         // 42
console.log(parseFloat('Hgb'));        // NaN
console.log(parseFloat('10.55abc'));   // 10.55
console.log(parseFloat('anm10.55'));   // NaN
