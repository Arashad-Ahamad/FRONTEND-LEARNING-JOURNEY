// -------------------------
// Getters and Setters
// -------------------------
// Example 1: Normal Object with Getter & Setter
const person = {
    firstName: 'Arashad',
    lastName: 'Ahamad',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(newName) {
        const parts = newName.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

console.log(person.fullName);
person.fullName = 'Ahad khan'
console.log(person.fullName);

// Example 2:  Class with get / set keywords
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get studentInfo() {
    return `Name: ${this.name}, Age: ${this.age}`
  }

  set studentAge(newAge) {
    this.age = newAge
  }
}
const s1 = new Student('Arashad', 20)
console.log(s1)
console.log(s1.studentInfo)
s1.studentAge = 60
console.log(s1.studentInfo)

// Example 3: Normal Method as Getter & Setter (without keywords)
class Smartphone {
  constructor(model, price) {
    this.model = model
    this.price = price
  }

  setPrice(newPrice) {
    if (newPrice > 0) {
      this.price = newPrice
    } else {
      console.log('Invalid Price')
    }
  }

  getPrice() {
    return `Model: ${this.model}, Current price: ${this.price}`
  }
}

const phone1 = new Smartphone('iPhone 15', 80000)
console.log(phone1.getPrice())
phone1.setPrice(90000)
console.log(phone1.getPrice())

