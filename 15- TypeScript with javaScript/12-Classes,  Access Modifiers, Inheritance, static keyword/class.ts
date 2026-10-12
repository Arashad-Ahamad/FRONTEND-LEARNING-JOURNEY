class User {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age

    }
}

const user1 = new User('Arashad', 21)
const user2 = new User('Aman', 30)

console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user2);


class Product {
    name: string;
    price: number;
    inStock: boolean;

    constructor(name: string, price: number, inStock: boolean) {
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    greet(): void {
        console.log(`Hello my name is ${this.name}`);
    }

}

const product1 = new Product("Laptop", 50000, true);
console.log(product1);
product1.greet()