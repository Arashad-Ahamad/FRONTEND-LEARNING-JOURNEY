// ----------------------------------
// some() array method
// ----------------------------------

// Question 1: Is any number greater than 10?
const numbers = [4, 8, 12, 6];
const hasGreaterThan10 = numbers.some((num) => {
  return num > 10;
});
console.log(hasGreaterThan10); // true (12 is greater than 10)

// Question 2: Is any number greater than 10?
const numbers2 = [2, 4, 6];
const result = numbers2.some((num) => {
  return num > 10;
});
console.log(result); // false (no number is greater than 10)

// Question 3: Is there any negative number?
const marks = [5, 9, -2, 6];
const hasNegative = marks.some((num) => {
  return num < 0;
});
console.log(hasNegative); // true (-2 is negative)

// Question 4: Is any number negative?
const nums = [2, 4, 6, 7, 12];
const result2 = nums.some((num) => {
  return num < 0;
});
console.log(result2); // false (all are positive)

// Question 5: Is any string empty?
const names = ['Arashad', '', 'Ali'];
const isEmptyPresent = names.some(name => name === '');
console.log(isEmptyPresent); // true ('' is an empty string)

// Question 6: Is any product expensive (price > 40000)?
const products = [
  { name: 'leptop', price: 45000 },
  { name: 'Mouse', price: 500 },
  { name: 'monitor', price: 12000 }
];
const expensive = products.some((item) => {
  return item.price > 40000;
});
console.log(expensive); // true (laptop is more than 40000)

console.log('**** every() array method ****');
// ----------------------------------
// every() array method
// ----------------------------------

// Question 7: Are all numbers positive?
const numbers3 = [1, 2, 3, 4, 5];
const allPositive = numbers3.every((num) => {
  return num > 0;
});
console.log(allPositive); // true (all numbers > 0)

// Question 8: Are all strings non-empty?
const names2 = ['Ali', 'Hamid', 'Faheem'];
const allFilled = names2.every((name) => {
  return name !== '';
});
console.log(allFilled); // true (none of them are empty)

// Question 10: Are all users online?
const users = [
  { name: 'Arashad', online: true },
  { name: 'Ali', online: true }
];
const allOnline = users.every((user) => {
  return user.online === true;
});
console.log(allOnline); // true (both are online)

// Question 11: Have all students passed (marks >= 35)?
const marks2 = [45, 66, 88, 33];
const allPassed = marks2.every((mark) => {
  return mark >= 35;
});
console.log(allPassed); // false (33 is less than 35)

// Question 12: Are all item prices greater than 5?
const items = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 30 },
  { name: "Bag", price: 50 }
];
const result3 = items.every((item) => {
  return item.price > 5;
});
console.log(result3); // true (all items have price > 5)
