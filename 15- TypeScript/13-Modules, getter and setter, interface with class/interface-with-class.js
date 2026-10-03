class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello' + this.name);
    }
}
const user1 = new User('Arashad', 21);
console.log(user1.name);
console.log(user1.age);
export {};
//# sourceMappingURL=interface-with-class.js.map