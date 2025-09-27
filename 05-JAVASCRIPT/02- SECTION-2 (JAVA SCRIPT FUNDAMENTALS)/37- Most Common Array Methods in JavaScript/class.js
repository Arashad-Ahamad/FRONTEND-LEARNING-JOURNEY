// const numbers = [2, 4, 6, 8, 10]
// const result = numbers.shift()
// console.log(numbers);
// console.log(result);

// const result2 = numbers.unshift(9)
// console.log(numbers);


// const a = [1, 2, 3, 4]
// const b = ['a', 'b', 'c', 'd']
// const result3 = a.concat(b)
// console.log(result3);

// const fruits = ['apple', 'banana', 'cat' ]
// console.log(fruits.indexOf('cat'));
// console.log(fruits.indexOf('banana'));

// const colors = ['red', 'green', 'yellow']
// console.log(colors.includes('green'));
// console.log(colors.includes('black'));

// const name2 = ['Arshad', 'zoya', 'nargish']
// // const finalName3 = name2.sort()
// // console.log(name2);
// // console.log(finalName3);

// // const p = name2.slice(0, 2)
// // console.log(p);

// const d = name2.splice(2, 1)
// console.log(d);
// console.log(name2);

let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48];

// Step 1: Add 19 at the end
ages.push(19); 

// Step 2: Add 22 at the start
ages.unshift(22);

// Step 3: Replace index 3 with 17 using splice
ages.splice(3, 0, 17); // Insert 17 at index 3

// Step 4: Sort the array in ascending order
// ages.sort();

// Step 5: Reverse it (descending order)
ages.reverse();

// Step 6: Remove oldest and youngest person
ages.pop(); // removes last item (youngest in descending)
ages.shift(); // removes first item (oldest in descending)

// Step 7: Check if 19 exists and get its index
let has19 = ages.includes(19);

// Final output
console.log("Final ages:", ages);
console.log(has19);
if (has19) {
  console.log("Index of 19 is:", index19);
}

// question 2
const event1Participants = ["Alice", "Bob", "Charlie"];
const event2Participants = ["David", "Eve", "Frank"];
const result = event1Participants.concat(event2Participants)
console.log(result);


// question 3
const weeklyTemperatures = [72, 75, 79, 83, 78, 74, 70];
const Temperatures = weeklyTemperatures.slice(2,  5)
console.log(Temperatures);



// // Question 1:
// // const  fruits = ['Apple', 'Banana', 'Grapes']
// // console.log(typeof fruits);
// // console.log(fruits[0]);
// // console.log(fruits[2]);
// // console.log(fruits[9]);
// // console.log(fruits);

// // Question 2:
// // const number = [10, 20 , 30 ,40, 50]
// // console.log(number[0]);
// // console.log(number[4]);

// // Question 3:


// // Question 4:
// // const nums = [1, 2, 3, 4, 5]
// // nums[10] = 90
// // nums[11] = 100
// // console.log(nums[7]);
// // console.log(nums);

// // Question 5:
// // const user = [
// //     {name: 'Arshad', age: 21},
// //     {name: 'Vishal', age: 26}
// // ]

// // console.log(user[0]);
// // console.log(user[0].age);

// // console.log(user[1]);
// // console.log(user[1].age);

// // Question 6:
// // const fruits3 = []
// // fruits3[0] = 'Apple'
// // fruits3[1] = 'Banana'
// // fruits3 [2] = 'Mango'
// // console.log(fruits3);

// // Question 7:
// // const company = ['Cisco', ' Google']
// // company[0] = 'Apple'
// // company[2] = 'Microsoft'
// // company[3] = 'IBm'
// // console.log(company);

