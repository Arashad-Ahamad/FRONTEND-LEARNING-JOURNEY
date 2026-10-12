"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Normal property 
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User('Arashad', 21);
console.log(user1.name);
console.log(user1.age);
// static
class info {
    static company = 'Google';
}
console.log(info.company);
// static
class Userstatic {
    name;
    static company = "Apple";
    constructor(name) {
        this.name = name;
    }
}
const user2 = new Userstatic('Arashad');
const user3 = new Userstatic('Aman');
console.log(user2.name);
console.log(user3.name);
console.log(Userstatic.company);
// Normal method
class UserHello {
    sayHello() {
        console.log('Hello');
    }
}
const userHello1 = new UserHello();
userHello1.sayHello();
// Static method
class SayUser {
    static sayHi() {
        console.log('Hi');
    }
}
SayUser.sayHi();
//# sourceMappingURL=statickeyword.js.map