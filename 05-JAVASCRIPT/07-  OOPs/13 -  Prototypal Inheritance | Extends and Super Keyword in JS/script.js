// ----------------------------
// Prototypal Inheritance
// ----------------------------
// Example 1:
let parent = {
  greet() {
    return 'Hello, I am from parent!'
  },
}

let child = {
  name: 'Arashad',
}

child.__proto__ = parent
console.log(child.greet())

// Example 2:
class Person {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    return `Hello i am ${this.name}`
  }
}

const p1 = new Person('Arashad')
console.log(p1.sayHello())

// ----------------------------
// Extends and Super Keyword
// ----------------------------
// Example 3: // Extends
class parent2 {
  greet() {
    console.log('Hello from parent')
  }
}

class Child extends parent2 {}

const obj = new Child()
obj.greet()

// Example 4: // Extends
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name}  makes a sound`)
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`)
  }
}
const d1 = new Dog('Tommy')
d1.speak()
d1.bark()

// Example 5:
class Parent3 {
  constructor(name) {
    this.name = name
  }
}

class Child2 extends Parent3 {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
const obj2 = new Child2('Arashad', 20)
console.log(obj2.name)
console.log(obj2.age)

// Example 6:
class parent4 {
  greet() {
    return 'Hello from Parent!'
  }
}

class Child4 extends parent4 {
  greet() {
    return super.greet() + ' And Hello from Child!'
  }
}

const obj3 = new Child4()
console.log(obj3.greet())
