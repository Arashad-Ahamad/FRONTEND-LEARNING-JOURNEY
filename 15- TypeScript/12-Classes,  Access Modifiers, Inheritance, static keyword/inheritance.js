"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}
const dog1 = new Dog("Tommy");
console.log(dog1.eat());
console.log(dog1.bark());
//# sourceMappingURL=inheritance.js.map