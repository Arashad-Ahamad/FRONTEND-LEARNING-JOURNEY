// Example 1: Normal Programming (Procedural Programming)
const name = 'Arashad'
const age = 21
function introduce(n, a) {
  console.log(`Hi my name is ${n}. I am ${a} years old.`)
}
introduce(name, age)

// Example 2:  OOP (Object Oriented Programming)
const student = {
  name: 'Arashad',
  age: 21,
  greet() {
    console.log(`Hi my name is ${student.name}. I am ${student.age} years old.`)
  },
}

student.greet()

// Example 3:  Normal Programming
let balance = 1000

function deposit(amount) {
  balance += amount
}

function withdraw(amount) {
  balance -= amount
}
deposit(500)
withdraw(200)
console.log(balance)

// Example 4: OOP Programming
let bankAccount = {
  balance: 1000,

  deposit(amount) {
    bankAccount.balance += amount
  },

  withdraw(amount) {
    bankAccount.balance -= amount
  },
}
bankAccount.deposit(500)
bankAccount.withdraw(200)
console.log(bankAccount.balance);

// Example 5: OOP Programming
let person  = {
    name: 'Arashad',
    age: 21,
    greet() {
        console.log(`Hello ${person.name}`);
    }
}
person.greet()

// Example 6: Normal Object
const student1 = {
    Name: 'Arashad',
    age: 21,
    course: 'Front-End'
}

const student2 = {
    Name: 'Asif',
    age: 25,
    course: 'B.a'
}

const student3 = {
    Name: 'Ahad',
    age: 22,
    course: 'back-end'
}
console.log(student1);
console.log(student2);
console.log(student3);

// Example 7: Factory Function 
function createStudent(name, age, course) {
    return {
        name,
        age,
        course,
        introduce() {
        console.log(`Hi Iam ${this.name}. ${this.age} Years old. I study ${this.course}.`);
    }
    }
    
}

const s1 =  createStudent('Arashad', 21, 'Front-end')
const s2 = createStudent('Ahad', 22, 'Back-end')
const s3 = createStudent('Faheem', 25, 'Mba')
console.log(s1);
console.log(s2);
console.log(s3);
s1.introduce()
s2.introduce()
s3.introduce()