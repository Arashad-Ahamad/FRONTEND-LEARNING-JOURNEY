// ---------------------------------------------
// Static Properties And Methods on Classes
// ---------------------------------------------
// Example 1:
class Student {
  static schoolName = 'ABC High School' // static property

  constructor(name, age) {
    this.name = name // normal property
    this.age = age
  }
  static welcome() {
    // static method
    return `Welcome to ${this.schoolName}`
  }

  info() {
    // normal method
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

// Use
console.log(Student.schoolName)
console.log(Student.welcome())

const s1 = new Student('Arshad', 20)
console.log(s1)
console.log(s1.info())
// console.log(s1.schoolName);  // Error
// console.log(s1.welcome());  // Error

// Example 2:
class Calculator {
  static add(a, b) {
    return a + b
  }

  static multiply(a, b) {
    return a * b
  }
}

console.log(Calculator.add(5, 10))
console.log(Calculator.multiply(4, 6))
console.log(Calculator.add(30, 90))
console.log(Calculator.multiply(20, 5))

// Example 3: Example with counter
class Employee {
  static employeeCount = 0

  constructor(name) {
    this.name = name
    Employee.employeeCount++
  }

  static getCount() {
    return Employee.employeeCount
  }
}

// Create employee objects
const e1 = new Employee('Arashad')
const e2 = new Employee('Ali')
const e3 = new Employee('Ahad')

// Access the static property and method
console.log(Employee.getCount())
console.log(Employee.employeeCount) // direct access

// Example 4: Static block
class TaxiService {
  static {
    this.baseFare = 50
    this.perKmRate = 12
    this.totalRides = 0
    console.log('Taxi Service System Ready')
  }

  constructor(customer, distance) {
    this.customer = customer
    this.distance = distance
    TaxiService.totalRides++
  }

  calculateFare() {
    return TaxiService.baseFare + this.distance * TaxiService.perKmRate
  }

  static getTotalRides() {
    return TaxiService.totalRides
  }
}

const r1 = new TaxiService('Arashad', 10)
const r2 = new TaxiService('Ahad', 5)

console.log(`${r1.customer} Fare: ₹${r1.calculateFare()}`)
console.log(`${r2.customer} Fare: ₹${r2.calculateFare()}`)

console.log('Total Rides:', TaxiService.getTotalRides())
console.log('Per Km Rate:', TaxiService.perKmRate)
