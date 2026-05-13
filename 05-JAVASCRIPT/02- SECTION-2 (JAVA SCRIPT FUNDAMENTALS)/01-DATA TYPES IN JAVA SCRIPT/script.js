// NUMBER DATA TYPE
console.log(typeof 57);                    // number
console.log(typeof 798898793797);          // number
console.log(typeof -798898793797);         // number
console.log(typeof 7.6);                   // number

// STRING DATA TYPE
// Strings can be stored in 3 ways: '', "", and ``
console.log(typeof 'Hello');               // string
console.log(typeof "Hello");               // string
console.log(typeof "We'll learn about JS"); // string
console.log(typeof 'We"ll learn JS');       // string
console.log(typeof '');                    // string (empty)
console.log(typeof "");                    // string (empty)
console.log(typeof `Hello`);               // string
console.log(typeof ``);                    // string (empty)

// Multi-line string using template literals
console.log(`Hi
    My name is Arashad.`);

// STRING TO NUMBER CONVERSION
console.log(typeof `57`);        // string
console.log(+`57`);              // 57 (number)
console.log(typeof +`57`);       // number
console.log(-`57`);              // -57 (number)
console.log(typeof -`57`);       // number

// Invalid string-to-number conversion
console.log(`Arashad`);           // "Arashad" (string)
console.log(typeof `Arashad`);    // string
console.log(-`Arashad`);          // NaN (Not a Number)
console.log(typeof -`Arashad`);   // number (but NaN)

// Checking NaN type
console.log(typeof NaN);          // number

// String with numbers (parseInt example)
console.log(parseInt(`200aabcd`));        // 200
console.log(typeof parseInt(`200aabcd`)); // number
console.log(parseInt(`33aabcd5456ijk`));  // 33
console.log(parseInt(`fgh33aabcd5456ijk`)); // NaN

// NUMBER TO STRING CONVERSION
console.log(100);                        // 100 (number)
console.log(typeof 100);                  // number
console.log(100 + ``);                    // "100" (string)
console.log(typeof (100 + ``));           // string

// String concatenation with numbers
console.log(100 + `Arashad`);           // "100Arashad" (string)
console.log(typeof (100 + `Arashad`));  // string
console.log(`` + 100);                  // "100" (string)
console.log(typeof (`` + 100));         // string
console.log(`Arashad` + 100);           // "Arashad100" (string)
console.log(typeof (`Arashad` + 100));  // string

// BOOLEAN DATA TYPE
console.log(true);             // true
console.log(typeof true);      // boolean
console.log(false);            // false
console.log(typeof false);     // boolean

// BOOLEAN TO NUMBER CONVERSION
console.log(+true);            // 1
console.log(typeof +true);     // number
console.log(+false);           // 0
console.log(typeof +false);    // number

// UNDEFINED DATA TYPE
console.log(undefined);        // undefined
console.log(typeof undefined); // undefined

// Convert Undefined to Number
console.log(+undefined);       // NaN
console.log(typeof +undefined); // number (but NaN)

// Convert Undefined to String
console.log(undefined + ``);   // "undefined" (string)
console.log(typeof (undefined + ``)); // string

// NULL DATA TYPE
console.log(null);             // null
console.log(typeof null);      // object (JavaScript bug)

// Convert Null to Number
console.log(+null);            // 0
console.log(typeof +null);     // number

// BIGINT DATA TYPE (for very large numbers)
console.log(9007199254740992n);        // 9007199254740992n
console.log(typeof 9007199254740992n); // bigint
