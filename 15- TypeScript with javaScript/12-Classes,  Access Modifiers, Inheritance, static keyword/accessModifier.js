"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// public
class Info {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const info1 = new Info('Arashad', 21);
console.log(info1.age);
console.log(info1.name);
// private 
class ageInfo {
    age;
    constructor(age) {
        this.age = age;
    }
    showAge() {
        console.log(this.age);
    }
}
// protected 
class nameInfo {
    name;
    constructor(name) {
        this.name = name;
    }
}
class admin extends nameInfo {
    showAge() {
        console.log(this.name); // Allowed
    }
}
//# sourceMappingURL=accessModifier.js.map