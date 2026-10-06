// Question 1:
var User;
(function (User) {
    User.name = 'Arashad';
    User.age = 21;
})(User || (User = {}));
console.log(User.name);
console.log(User.age);
// Question 2:
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
})(MathUtils || (MathUtils = {}));
const result = MathUtils.add(10, 20);
console.log(result);
// Question 3:
var User2;
(function (User2) {
    class Person {
        constructor(name) {
            this.name = name;
        }
        greet() {
            console.log(`Hello ${this.name}`);
        }
    }
    User2.Person = Person;
})(User2 || (User2 = {}));
// Namespace ke bahar
const user = new User2.Person("Arshad");
user.greet();
// Question 4:
var Calculator;
(function (Calculator) {
    function add1(a, b) {
        return a + b;
    }
    Calculator.add1 = add1;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    Calculator.multiply = multiply;
})(Calculator || (Calculator = {}));
console.log(Calculator.add1(10, 5));
console.log(Calculator.subtract(10, 5));
console.log(Calculator.multiply(10, 5));
export {};
//# sourceMappingURL=namespaces.js.map