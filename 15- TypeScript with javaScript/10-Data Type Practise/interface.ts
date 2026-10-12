// Question 1:
interface User1 {
    name:string
    age:number
}

let info1:User1 = {
    name:'Arashad',
    age:21
}

// Question 2:
interface Car {
    brand:string
    model:string
    price:number
}

let car1:Car = {
    brand: 'Toyota',
    model: 'Fortuner',
    price: 4200000
}

let car2:Car = {
    brand:'Audi',
    model: 'RS Q8',
    price: 25000000
}

let car3:Car = {
    brand: 'BMW',
    model: 'XM',
    price: 25500000
}

// Question 3:
interface User2 {
    name:string
    age:number
    email?:string
}

let bio:User2 = {
    name:'Arashad',
    age:21,
}

// Question 4:

interface Person {
    name: string
    age: number
}

interface Employee extends Person {
    employeeId: number;
  department: string;
  salary: number;
}

let info2:Person = {
    name: 'Aman',
    age: 13
}

let data:Employee = {
    name:'Ahad',
    age:19,
    employeeId: 123,
    department:'IT',
    salary: 250000
}