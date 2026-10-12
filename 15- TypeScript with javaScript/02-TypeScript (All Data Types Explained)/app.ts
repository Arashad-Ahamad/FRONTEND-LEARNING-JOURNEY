// String Data Type
let a: string = 'Hello'
let b: string = "hi"

console.log(a);
console.log(b);

// Number Data Type

let age: number = 21
console.log(age);

// boolean
let isLoggedIn: boolean = true
console.log(isLoggedIn);

//null
let selectedUser: null = null
console.log(selectedUser);

// undefined
let userName: string | undefined;
console.log(userName);

//bigint
let bigInt: bigint = 87631719619139n;
console.log(bigInt);

// Object / Non-Primitive Types

let user: {
    name: string;
    age: number;
} = {
    name: 'Arashad',
    age: 23
}
console.log(user.name);
console.log(user.age);

// Array
let number: number[] = [1, 2, 3, 4]
number.push(40)
console.log(number);

let name1: string[] = ['Arashad', 'Asif', 'Sahbaz']
console.log(name1);

let age2: Array<number> = [23, 24, 25]
console.log(age2);

// Tuple
let user2: [string, number] = ['Arashad', 21]
console.log(user2);

// Function Types
// 1-------
function greet(name: string) {
    console.log(`Hello ${name}`);
}

greet('Arashad')

// 2-------

function add(a: number, b: number): number {
    return a + b

}

let result = add(2, 3)
console.log(result);

// 3-------
let c: (a: number, b: number) => number
c = (a, b) => {
    return a * b
}

let result2 = c(5, 5)
console.log(result2

);

// 4-----------
// void
function greet2(): void {
    console.log('Hello');
}
greet2()

// ----------------------------------------

// any
let data: any = 10;
data = 'Hello'
data = true
data = []
console.log(data);

// unknown
let data2: unknown = 'Hello'
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
let id: number | string;
id = 123
id = 'Abc123'
console.log(id);

// 2--------------
let result3: string | number;
result3 = "Success";
result3 = 200;

console.log(result3);

// Intersection Type &
type person = {
    name: string
}

type Employee = {
    salary: number
}

type EmployeePerson = person & Employee

let user3: EmployeePerson = {
    name: 'Arashad',
    salary: 55000
}
console.log(user3);

// Literal Types
// 1---------------

let direction: 'left' | 'right'
direction = 'left'
direction = 'right'
console.log(direction);

// 2---------------

let role: string
role = 'Hello'
role = 'hi'
role = 'user'
console.log(role);

// 3---------------

let statusCode: 200 | 404 | 500;
statusCode = 200;
statusCode = 404;
statusCode = 500;
console.log(statusCode);


// Type Alias


type user = {
    id:number
    name:string
    age:number
    email?: string
}

let user4:user = {
    id:101,
    name: 'Arashad',
    age: 21


}
console.log(user4);


// interface --------------------------------------------------------
// 1----------------

interface User {
    name: string
    age:number
}

let user5:User = {
    name: 'Arashad',
    age: 21

}

console.log(user5);

// 2----------------
// Multiple objects  reuse

interface Car {
    brand: string
    model: string
    price: number

}

let car1:Car = {
    brand: 'Toyoto',
    model: 'Fortuner',
    price: 4000000
}
console.log(car1);

let car2:Car = {
    brand: 'BMW',
    model: 'BMW XM ',
    price: 25000000
}
console.log(car2);

let car3:Car = {
    brand: 'Audi',
    model: 'Audi RS Q8',
    price: 23400000
}
console.log(car3);

// Optional Property ?

interface User2 {
    name:string
    age:number
    email?: string
}

let user6:User2 = {
    name: 'Arashad',
    age:21,
}
console.log(user6);

let user7:User2 = {
    name: 'Asif',
    age:25,
    email: 'Asif@gmail.com'
}

console.log(user7);

// Readonly Property

interface User3 {
    readonly id: number
    name: string
}

let user8:User3 = {
    id: 101,
    name:  'Arashad'
}
user8.name = 'Asif'
// user8.id = 202    Cannot assign to 'id' because it is a read-only property
console.log(user8);

//  Interface mein function bhi define kar sakte hain

interface User4 {
    name:string
    age: number
    greet(): void
}

let user9:User4 = {
    name: 'Arashad',
    age:21,
    greet() {
        console.log('Hello ');
    }
}