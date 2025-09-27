// -----------------------------------------------
// Array.sort() methods
// -----------------------------------------------

// Example 1: Sort lowercase strings in ascending order (a -> z)
const arr = ['apple', 'zebra', 'cherry', 'banana']
arr.sort()
console.log(arr);

// Example 2: Sort lowercase strings in descending order (z -> a)
const arr2 = ['apple', 'zebra', 'cherry', 'banana']
arr2.sort().reverse()
console.log(arr2);

// Example 3: Sort capitalized strings in ascending order (A -> Z)
const arr3 = ['Apple', 'Zebra', 'Cherry', 'Banana']
arr3.sort()
console.log(arr3);

// Example 4: Sort capitalized strings in descending order (Z -> A)
const arr4 = ['Apple', 'Zebra', 'Cherry', 'Banana']
arr4.sort().reverse()
console.log(arr4);

// Example 5: Sort mixed-case strings in ascending order, ignoring case
const names = ['Zahid', 'wahid', 'Arashad', 'faheem', 'Rahul']
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(names);

// Example 6: Sort mixed-case strings in descending order, ignoring case
const names2 = ['Zahid', 'wahid', 'Arashad', 'faheem', 'Rahul']
names2.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
console.log(names2);

// Example 7: Sort numbers in ascending order
const numbers = [10, 12, 1, 3, 9, 2]
numbers.sort((a, b) => a - b)
console.log(numbers);

// Example 8: Sort numbers in descending order
const numbers2 = [10, 12, 1, 3, 9, 2] 
numbers2.sort((a, b) => b - a)
console.log(numbers2);

// Example 9: Sort array of objects by age in ascending order
const users = [
    {name: 'Khalid', age: 21},
    {name: 'Wahid', age: 30},
    {name: 'Aman', age: 17},
    {name: 'Faheem', age: 22},
    {name: 'Nawshad', age: 24},
]
users.sort((a, b) => a.age - b.age)
console.log(users);

// Example 10: Sort array of objects by name alphabetically (case-insensitive)
const users2 = [
    {name: 'Khalid', age: 21},
    {name: 'Wahid', age: 30},
    {name: 'Aman', age: 17},
    {name: 'Faheem', age: 22},
    {name: 'Nawshad', age: 24},
]
users2.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
console.log(users2);

// -----------------------------------------------
// Array.toSorted() methods
// -----------------------------------------------

// Example 11: Create a new sorted array of numbers in ascending order
const nums = [20, 1, 5, 300, 250, 21, 18]
const sortedNums = nums.toSorted((a, b) => a - b)
console.log(nums); // Original remains unchanged
console.log(sortedNums);

// Example 12: Create a new sorted array of numbers in descending order
const nums2 = [10, 12, 2, 1, 200, 40, 6, 8, 87]
const sortedDesc = nums2.toSorted((a, b) => b - a)
console.log(nums2);
console.log(sortedDesc);

// Example 13: Create a new sorted array of lowercase strings (a -> z)
const city = ['ghazipur', 'lucknow', 'delhi', 'mumbai']
const result = city.toSorted()
console.log(result);

// Example 14: Create a new sorted array of lowercase strings (z -> a)
const city2 = ['ghazipur', 'lucknow', 'delhi', 'mumbai']
const result2 = city2.toSorted().reverse()
console.log(result2);

// Example 15: Sort capitalized words in ascending order (A -> Z)
const products = ['Mobile', 'Laptop', 'Tablate', 'Charging', 'Pen']
const productsResult = products.toSorted()
console.log(productsResult);

// Example 16: Sort capitalized words in descending order (Z -> A)
const products2 = ['Mobile', 'Laptop', 'Tablate', 'Charging', 'Pen']
const productsResult2 = products2.toSorted().reverse()
console.log(productsResult2);

// Example 17: Sort mixed-case strings ascending, case-insensitive
const country = ['India', 'usa', 'France', 'canda', 'turky']
const result3 = country.toSorted((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(result3);

// Example 18: Sort mixed-case strings descending, case-insensitive
const country2 = ['India', 'usa', 'France', 'canda', 'turky']
const result4 = country2.toSorted((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
console.log(result4);

// Example 19: Sort array of objects by age using toSorted (non-destructive)
const users3 = [
    {name: 'Khalid', age: 21},
    {name: 'Wahid', age: 30},
    {name: 'Aman', age: 17},
    {name: 'Faheem', age: 22},
    {name: 'Nawshad', age: 24},
]
const result5 = users3.toSorted((a, b) => a.age - b.age)
console.log(result5);

// -----------------------------------------------
//  Question 1: Sort array of users by age (ascending) without modifying original array. Do not use .toSorted()
// -----------------------------------------------

// Original array of user objects
const users4 = [
  { name: 'Khalid', age: 21 },
  { name: 'Wahid', age: 30 },
  { name: 'Aman', age: 17 },
  { name: 'Faheem', age: 22 },
  { name: 'Nawshad', age: 24 },
];

//  Use spread operator (...) to create a shallow copy of the original array
//  This ensures that the original users4 array is not modified
const result6 = [...users4];

//  Sort the copied array by age in ascending order
result6.sort((a, b) => a.age - b.age);

console.log(result6); // Output: Sorted array from youngest to oldest
console.log(users4);  // Output: Same as original input
