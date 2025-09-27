// Example 1: == (Equal to) 
const a = 5;
const b = '5';
console.log(a == b); // true (value is the same, type is ignored)
console.log(a == 6); // false (value is different)

// Example 2: === (Strictly equal to)
console.log(a === b); // false (value is the same, but type is different)
console.log(a === 5); // true (value and type are the same)

// Example 3: != (Not equal to)
const x = 9;
const y = '9';
console.log(x != y); // false (value is the same, type is ignored)
console.log(x != 6); // true (value is different)

// Example 4: !== (Strictly not equal to)
console.log(x !== y); // true (value is the same, but type is different)
console.log(x !== 9); // false (value and type are the same)

// Example 5: > (Greater than)
const p = 10;
const q = 5;
console.log(p > q); // true (10 is greater than 5)
console.log(q > p); // false (5 is not greater than 10)

// Example 6: < (Less than)
console.log(q < p); // true (5 is less than 10)
console.log(p < q); // false (10 is not less than 5)

// Example 7: >= (Greater than or equal to)
const m = 10;
const n = 10;
console.log(m >= n); // true (10 is equal to 10)
console.log(m >= 11); // false (10 is not greater than 11)

// Example 8: <= (Less than or equal to)
const u = 5;
const v = 10;
console.log(u <= v); // true (5 is less than 10)
console.log(v <= 5); // false (10 is not less than 5)
