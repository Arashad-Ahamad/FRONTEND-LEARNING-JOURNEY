"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User('Arashad', 21);
const user2 = new User('Aman', 30);
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user2);
class Product {
    name;
    price;
    inStock;
    constructor(name, price, inStock) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    greet() {
        console.log(`Hello my name is ${this.name}`);
    }
}
const product1 = new Product("Laptop", 50000, true);
console.log(product1);
product1.greet();
//# sourceMappingURL=class.js.map