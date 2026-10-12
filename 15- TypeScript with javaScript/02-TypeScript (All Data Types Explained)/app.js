// String Data Type
let a = 'Hello';
let b = "hi";
console.log(a);
console.log(b);
// Number Data Type
let age = 21;
console.log(age);
// boolean
let isLoggedIn = true;
console.log(isLoggedIn);
//null
let selectedUser = null;
console.log(selectedUser);
// undefined
let userName;
console.log(userName);
//bigint
let bigInt = 87631719619139n;
console.log(bigInt);
// Object / Non-Primitive Types
let user = {
    name: 'Arashad',
    age: 23
};
console.log(user.name);
console.log(user.age);
// Array
let number = [1, 2, 3, 4];
number.push(40);
console.log(number);
let name1 = ['Arashad', 'Asif', 'Sahbaz'];
console.log(name1);
let age2 = [23, 24, 25];
console.log(age2);
// Tuple
let user2 = ['Arashad', 21];
console.log(user2);
// Function Types
// 1-------
function greet(name) {
    console.log(`Hello ${name}`);
}
greet('Arashad');
// 2-------
function add(a, b) {
    return a + b;
}
let result = add(2, 3);
console.log(result);
// 3-------
let c;
c = (a, b) => {
    return a * b;
};
let result2 = c(5, 5);
console.log(result2);
// 4-----------
// void
function greet2() {
    console.log('Hello');
}
greet2();
// ----------------------------------------
// any
let data = 10;
data = 'Hello';
data = true;
data = [];
console.log(data);
// unknown
let data2 = 'Hello';
// console.log(data2.toUpperCase()); // Error
if (typeof data2 === 'string') {
    console.log(data2.toUpperCase());
}
// never
// 1---------------
// function errorMessage():never {
//     throw new Error ("Something went wrong")
// }
// errorMessage()
// Union Type |
// 1---------------
let id;
id = 123;
id = 'Abc123';
console.log(id);
// 2--------------
let result3;
result3 = "Success";
result3 = 200;
console.log(result3);
let user3 = {
    name: 'Arashad',
    salary: 55000
};
console.log(user3);
// Literal Types
// 1---------------
let direction;
direction = 'left';
direction = 'right';
console.log(direction);
// 2---------------
let role;
role = 'Hello';
role = 'hi';
role = 'user';
console.log(role);
// 3---------------
let statusCode;
statusCode = 200;
statusCode = 404;
statusCode = 500;
console.log(statusCode);
let user4 = {
    id: 101,
    name: 'Arashad',
    age: 21
};
console.log(user4);
let user5 = {
    name: 'Arashad',
    age: 21
};
console.log(user5);
let car1 = {
    brand: 'Toyoto',
    model: 'Fortuner',
    price: 4000000
};
console.log(car1);
let car2 = {
    brand: 'BMW',
    model: 'BMW XM ',
    price: 25000000
};
console.log(car2);
let car3 = {
    brand: 'Audi',
    model: 'Audi RS Q8',
    price: 23400000
};
console.log(car3);
let user6 = {
    name: 'Arashad',
    age: 21,
};
console.log(user6);
let user7 = {
    name: 'Asif',
    age: 25,
    email: 'Asif@gmail.com'
};
console.log(user7);
let user8 = {
    id: 101,
    name: 'Arashad'
};
user8.name = 'Asif';
// user8.id = 202    Cannot assign to 'id' because it is a read-only property
console.log(user8);
let user9 = {
    name: 'Arashad',
    age: 21,
    greet() {
        console.log('Hello ');
    }
};
export {};
//# sourceMappingURL=app.js.map