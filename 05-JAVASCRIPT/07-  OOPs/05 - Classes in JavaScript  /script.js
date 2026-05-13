// ------------------------------
// Classes in JavaScript
// ------------------------------

// Example 1:
class Apprentice {
  constructor(fullIdentity, ageYears) {
    this.fullIdentity = fullIdentity
    this.ageYears = ageYears
  }

  // method
  greetPerson() {
    return `Hello, my name is ${this.fullIdentity} and I am ${this.ageYears} years old.`
  }
}

// ---- Object Creation ----
const apprenticeOne = new Apprentice('Arshad', 20)
console.log(apprenticeOne)
console.log(apprenticeOne.fullIdentity)
console.log(apprenticeOne.greetPerson())

const apprenticeTwo = new Apprentice('Ahad', 25)
console.log(apprenticeTwo)
console.log(apprenticeTwo.greetPerson())

// Example 2:


// Example 2: Vehicle Class
class Vehicle {
  constructor(make, type) {
    this.make = make
    this.type = type
  }

  // method
  ignite() {
    return `${this.make} ${this.type} is starting...`
  }
}

// ---- Object Creation ----
const vehicle1 = new Vehicle('Toyota', 'Corolla')
const vehicle2 = new Vehicle('Honda', 'Civic')
console.log(vehicle1)
console.log(vehicle2.ignite())

