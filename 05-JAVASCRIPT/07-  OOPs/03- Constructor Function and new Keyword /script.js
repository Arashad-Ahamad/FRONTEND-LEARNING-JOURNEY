// 'use strict'

// ------------------------------------
// this keyword
// ------------------------------------
//  Example 1: Normal Object
const person = {
  name: 'Arashad',
  age: 21,
  greet: function () {
    console.log('Hello my name is' + ' ' + this.name)
  },
}
person.greet()

//  Example 2: direct function
function showThis() {
  console.log(this)
}
showThis()

//  Example 3: Global Scope
console.log(this)

//  Example 4:  Constructor function
function Car(model) {
  this.model = model
}
const car1 = new Car('BMW')
console.log(car1)

//  Example 5: Arrow function
const person2 = {
  name: 'Arashad',
  greet: () => {
    console.log(this.name)
  },
}
person2.greet()

// ------------------------------------
// new Keyword
// ------------------------------------
//  Example 6: Simple Constructor

function Mobile(model) {
  this.model = model
}
const mobile1 = new Mobile('Apple')
console.log(mobile1)
console.log(mobile1.model)

//  Example 7: Multiple Objects
function Student(name, age) {
  this.name = name
  this.age = age
}
const student1 = new Student('Arashad', 21)
const student2 = new Student('Ahad', 24)
const student3 = new Student('Nawshad', 22)
console.log(student1)
console.log(student2)
console.log(student3)
console.log(student2.name)
console.log(student3.age)

//  Example 8: Another Constructor
function person3(name) {
  this.name = name
}
const p1 = new person3('Zeya')
console.log(p1)
console.log(p1.name)

//  Example 9:
function Animal(name) {
  return (this.name = name)
  return {
    type: 'dog',
  }
}
const a1 = new Animal('Tommy')
console.log(a1)
console.log(a1.name)

// ------------------------------------
// Constructor Function
// ------------------------------------
//  Example 10: Return Behavior in Constructor
//  Normal Function
function normal() {
  console.log('Hello')
}
normal()

// Constructor Function
function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

const book1 = new Book('Atomic Habits', 'James Clear', 2018)
const book2 = new Book('Ikigai', 'Héctor García', 2016)
console.log(book1)
console.log(book2)
console.log(book1.author)
console.log(book2.year)

//  Example 11: Constructor Function with Methods

// Constructor Function
// function  CabBooking(customerName, pickup, destination) {
//     this.customerName = customerName
//     this.pickup = pickup
//     this.destination = destination

//     // Problem: This method is created separately for each object
// // Every object (ride1, ride2, etc.) will have its own copy → memory inefficient
// // Method
//       this.startRide = function() {
//         return `Ride started for ${this.customerName} from ${this.pickup} to ${this.destination}`
//     }

// }

// const ride1 = new CabBooking('Arshad', 'Ghazipur', 'Lucknow')
// const ride2 = new CabBooking('Ahad', 'Delhi', 'Mumbai')
// console.log(ride1);
// console.log(ride2);
// console.log(ride1.startRide());

// Problem:
// The startRide method is created separately for each object inside the constructor.
// This means ride1 has its own copy of startRide, ride2 has its own copy, etc.
// If many objects are created, each will have its own copy of the same method,
// leading to unnecessary memory usage and inefficiency.

// Solution:
// Move the method to the prototype of the constructor function.
// This way, all objects share a single copy of the method, making it memory efficient.
// Alternatively, use modern class syntax, where methods are automatically added to the prototype.
function CabBooking(customerName, pickup, destination) {
  this.customerName = customerName
  this.pickup = pickup
  this.destination = destination
}
// Methods added to prototype → all objects share the same function, memory efficient
CabBooking.prototype.startRide = function () {
  return `Ride started for ${this.customerName} from ${this.pickup} to ${this.destination}`
}
const ride1 = new CabBooking('Arshad', 'Ghazipur', 'Lucknow')
const ride2 = new CabBooking('Ahad', 'Delhi', 'Mumbai')
console.log(ride1)
console.log(ride2)
console.log(ride1.startRide())
console.log(ride2.startRide())
console.log(ride2.__proto__)

// Question 1:
function Product(name, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
}
Product.prototype.totalCost = function () {
  return this.price * this.quantity
}
const product1 = new Product('Leptop', 50000, 2)
console.log(product1)
console.log(product1.totalCost())

const product2 = new Product('mobile', 15000, 3)
console.log(product2)
console.log(product2.totalCost())

// Question 2:
function BankAccount(ownerName, balance) {
  this.ownerName = ownerName
  this.balance = balance
}
BankAccount.prototype.deposit = function(amount) {
  return this.balance += amount
}

BankAccount.prototype.withdraw = function(amount) {
  return this.balance -= amount
}

const acc1 = new BankAccount('Arashad', 1000)
acc1.deposit(500)
console.log(acc1.balance);

acc1.withdraw(200)
console.log(acc1.balance);
console.log(acc1);

const acc2 = new BankAccount('Ahad', 500)
acc2.deposit(500)
console.log(acc2.balance);
console.log(acc2);