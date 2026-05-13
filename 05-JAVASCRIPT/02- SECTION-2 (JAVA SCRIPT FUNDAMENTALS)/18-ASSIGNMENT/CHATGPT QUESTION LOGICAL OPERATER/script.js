let a = 5;
let b = 10;
let c = 5;
const result= (a == c) && (b > a) || !(a < b)
console.log(result);

let x = 7;
let y = 15;
let z = 5;
const result2= (x < y) && (y > z) || (x == z)
console.log(result2);

let a1 = 10;
let b2 = 20;
const result3= !(a1 > b2) && (a1 < b2)
console.log(result3);

let p = 4;
let q = 8;
let r = 12;
const result4= (p + q == r) && (r - q > p) || !(p == 4)
console.log(result4);

let isLoggedIn = true;
let hasPremiumAccount = false;
const result5=isLoggedIn && hasPremiumAccount || !isLoggedIn
console.log(result5);

let a3 = 5;
let b3 = 10;
const result6=(a3 > b3 || b3 > a3) && !(a3 > b3 && b3 > a3)
console.log(result6);

let a4 = 5;
let b4 = 12;
let c4 = 0;
const result7=((a4 < b4 && b4 != c4) || !(c4 >= a4)) && (a4 + b4 > c4 * 2) || (b4 / a4 == 2 && !c4)
console.log(result7);