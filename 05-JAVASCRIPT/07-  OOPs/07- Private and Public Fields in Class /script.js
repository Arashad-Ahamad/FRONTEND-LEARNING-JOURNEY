// -------------------------------------
//   Public Fields and Methods in Class
// -------------------------------------

// Example 1:
class Person {
  name = 'Arshad' // Public field
  age = 20 // Public field

  constructor(city) {
    this.city = city // Public field (added through constructor)
  }

  // Public method
  showInfo() {
    return `${this.name}, Age: ${this.age}, City: ${this.city}`
  }
}

// Create object of Person
const p1 = new Person('Ghazipur')

console.log(p1) // Complete object
console.log(p1.name) // Access public field → Arshad
console.log(p1.age) // Access public field → 20
console.log(p1.city) // Access constructor field → Ghazipur
console.log(p1.showInfo()) // Call method → "Arshad, Age: 20, City: Ghazipur"

// Example 2:
class Car {
  wheels = 4 // Public field
  fuel = 'Petrol' // Public field

  constructor(model, year) {
    this.model = model // Public field
    this.year = year // Public field
  }
}

// Create object of Car
const car1 = new Car('BMW', 2022)

console.log(car1) // Complete object
console.log(car1.wheels) // Access public field → 4
console.log(car1.fuel) // Access public field → Petrol

// Modify public field
car1.fuel = 'Diesel'
console.log(car1.fuel) // Updated value → Diesel
console.log(car1) // Updated object

// -------------------------------------
//   Private Fields and Methods in Class
// -------------------------------------

// Example 3:
class Student {
  #age // private field declare

  constructor(name, age) {
    this.name = name // public
    this.#age = age // private assign
  }

  // method to access private field
  showInfo() {
    return `${this.name} is ${this.#age} years old`
  }
}

const s1 = new Student('Arashad', 20)
console.log(s1.name)
// console.log(s1.#age);   // error
console.log(s1)
console.log(s1.showInfo())

// Example 4:
class Learner {
  #name
  #age
  #roll

  constructor(name, age, roll) {
    this.#name = name
    this.#age = age
    this.#roll = roll
  }
  info() {
    return `Name: ${this.#name}, Age: ${this.#age}, Roll: ${this.#roll}`
  }
}
const learner1 = new Learner('Arashad', 20, 233227)
console.log(learner1)
// console.log(learner1.#name);   // error
// console.log(learner1.#age);   // error
// console.log(learner1.#roll);   // error
console.log(learner1.info())

// Example 5:
class User {
  #password

  constructor(name, password) {
    this.name = name
    this.#password = password
  }

  // private method
  #encryptPassword() {
    return `****${this.#password}****`
  }

  // public method
  getUserInfo() {
    return {
      name: this.name,
      secret: this.#encryptPassword(), //call inside class
    }
  }
}

const u1 = new User('Arashad', '1234')
console.log(u1)
// console.log(u1.#password);  // error
// console.log(u1.#encryptPassword());   // error
console.log(u1.getUserInfo())

// Example 6: Private Method
class MyClass {
  #privateMethod() {
    return 'This is a private method'
  }

  publicMethod() {
    return `${this.#privateMethod()}` // call inside class
  }
}

const obj = new MyClass()
console.log(obj)
// console.log(obj.#privateMethod());  // error
console.log(obj.publicMethod())

// Example 7: Private Field + Private Method Together
class Scholar {
  #age
  constructor(name, age) {
    this.name = name
    this.#age = age
  }

  #isAdult() {
    return this.#age >= 18
  }

  owStatus() {
    if (this.#isAdult()) {
      return `${this.name} is an adult`
    } else {
      return `${this.name} is not and adult`
    }
  }
}
const scholarA = new Scholar('Arashad', 10)
console.log(scholarA.owStatus())

// Example 7:
class Employee {
  #salary

  constructor(name, salary) {
    this.name = name
    this.#salary = salary
  }
  getSalary() {
    return this.#salary
  }
  setSalary(newSalary) {
    if (newSalary > 0) {
      this.#salary = newSalary
    }
  }
}

const emp = new Employee('Ahad', 35000)
console.log(emp.getSalary())
emp.setSalary(50000)
console.log(emp.getSalary())
// console.log(emp.#salary);  // error
