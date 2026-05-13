// "use strict"
// Example 1:
console.log(this)

// Example 2: Normal Function
function hello() {
  console.log(this)
}
hello()

// Example 3: Object Method
const person = {
  name: 'Arashad',
  greet() {
    console.log(this.name)
  },
}
person.greet()

// Example 4: Arrow Function
const person2 = {
  name: 'Ahad',
  greeet: () => {
    console.log(this.name)
  },
}
person2.greeet()

// Example 5: Constructor Function
function Person3 (name) {
    this.name = name
}

const p1 = new Person3('Asif')
console.log(p1.name);

// Example 6: Class 
class Person4 {
    constructor(name) {
        this.name = name
    }
    greeet() {
      return this.name
    }
}

const p2 = new Person4('Nawshad')
console.log(p2.greeet());

// Example 7: addEventListener  (Normal Function)
const h1 = document.querySelector('h1')
h1.addEventListener('click', function() {
    console.log(this);
})

// Example 7: addEventListener (Arrow Function)

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    console.log(this);
})
