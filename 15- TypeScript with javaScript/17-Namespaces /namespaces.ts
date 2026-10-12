// Question 1:

namespace User {
   export const name:string = 'Arashad'
   export const age:number = 21
}

console.log(User.name);
console.log(User.age);

// Question 2:

namespace MathUtils {
   export function add(a:number, b:number):number {
        return a+b
    }
}

const result = MathUtils.add(10, 20)
console.log(result);

// Question 3:
namespace User2 {
  export class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    greet() {
      console.log(`Hello ${this.name}`);
    }
  }
}

// Namespace ke bahar
const user = new User2.Person("Arshad");

user.greet();
// Question 4:

namespace Calculator {
  export function add1(a: number, b: number) {
    return a + b;
  }

  export function subtract(a: number, b: number) {
    return a - b;
  }

  export function multiply(a: number, b: number) {
    return a * b;
  }
}
console.log(Calculator.add1(10, 5));
console.log(Calculator.subtract(10, 5));
console.log(Calculator.multiply(10, 5));