// -----------------------------------------------------------
//  Compound (Combined Assignment) Operators
// -----------------------------------------------------------

// += (Addition Assignment Operator)
let num = 10
num += 5 // same as: num = num + 5
console.log(num) // Output: 15

// -= (Subtraction Assignment Operator)
let a = 30
a -= 10 // same as: a = a - 10
console.log(a) // Output: 20

// *= (Multiplication Assignment Operator)
let b = 6
b *= 10 // same as: b = b * 10
console.log(b) // Output: 60

// /= (Division Assignment Operator)
let c = 90
c /= 2 // same as: c = c / 2
console.log(c) // Output: 45

// %= (Remainder Assignment Operator)
let d = 13
d %= 2 // same as: d = d % 2 (gives remainder of 13 divided by 2)
console.log(d) // Output: 1

// **= (Exponentiation Assignment Operator)
let e = 3
e **= 2 // same as: e = e ** 2 (3 raised to the power of 2)
console.log(e) // Output: 9

let f = 5
f **= 3 // same as: f = f ** 3 (5 raised to the power of 3)
console.log(f) // Output: 125

// -----------------------------------------------------------
//  ++ (Increment Operator)
// -----------------------------------------------------------

// Simple increment
let g = 7
g++ // same as: g = g + 1
console.log(g) // Output: 8

// Post-Increment (x++): value is assigned first, then increased
let x = 10
let y = x++ // y = 10, then x becomes 11
console.log(x) // Output: 11
console.log(y) // Output: 10

// Pre-Increment (++x): value is increased first, then assigned
let h = 9
let i = ++h // h becomes 10 first, then i = h
console.log(h) // Output: 10
console.log(i) // Output: 10

// -----------------------------------------------------------
//  -- (Decrement Operator)
// -----------------------------------------------------------

// Simple decrement
let j = 6
j-- // same as: j = j - 1
console.log(j) // Output: 5

// Post-Decrement (x--): value is assigned first, then decreased
let k = 9
let l = k-- // l = 9, then k becomes 8
console.log(k) // Output: 8
console.log(l) // Output: 9

// Pre-Decrement (--y): value is decreased first, then assigned
let m = 20
let n = --m // m becomes 19 first, then n = m
console.log(m) // Output: 19
console.log(n) // Output: 19
