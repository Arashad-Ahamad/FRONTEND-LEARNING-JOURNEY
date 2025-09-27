// -------------------------
// Object.freeze() Example
// -------------------------

const user = {
  name: 'Arshad',
  age: 21,
}

Object.freeze(user) // FREEZE: Makes the object completely immutable

user.name = 'Ahmed' //  Update not allowed
user.city = 'Ghazipur' //  Add not allowed
delete user.age //  Delete not allowed

console.log(user) //  Output: { name: 'Arshad', age: 21 }

// -------------------------
//   Object.seal() Example
// -------------------------

const user2 = {
  name: 'Arshad',
  age: 21,
}

Object.seal(user2) // SEAL: Cannot add or delete properties, but values can be updated

user2.name = 'Ahmed' //  Update allowed
user2.city = 'Ghazipur' //  Add not allowed
delete user2.age //  Delete not allowed

console.log(user2) //  Output: { name: 'Ahmed', age: 21 }

//  -------------------------
// in keyword
//  -------------------------

const student = {
  name: 'Arshad',
  age: 25,
}

console.log('name' in student) //  true
console.log('class' in student) //  false

//  -------------------------
// delete keyword
//  -------------------------

const userA = {
  username: 'arshad123',
  email: 'arshad@example.com',
  password: '123456',
}

delete userA.password
console.log(userA)

//  -------------------------
// question: 1
const student2 = {
  name: 'Arashad',
  class: 'MCA',
}
console.log(student2)
console.log('name' in student2)

// question: 2
const car = {
  brand: 'Toyoto',
  model: 'Innova',
}
delete car.model
console.log(car)

// question: 3
const leptop = {
  brand: 'HP',
  ram: '8GB',
}
Object.seal(leptop)
leptop.ram = '16GB' //  Update allowed
leptop.processor = 'i5' //  Add not allowed
console.log(leptop)

// question: 4
const mobile = {
  barnd: 'MI',
  price: 10000
}
console.log('price' in mobile);

// question: 5
const deviceConfig = {
  os: "Android",
  version: 13
};

 Object.seal(deviceConfig)  //Cannot add or delete properties, but values can be updated

 // question: 6
 const data = {
  name: 'Arashad',
  Info: {
    city: 'Ghazipur',
    age: 21
  }
};

// This only freezes the outer object, not nested ones
Object.freeze(data);

// This is allowed because the nested object 'Info' is not frozen
data.Info.city = 'Delhi';

console.log(data);

// question: 7

// Only Freeze the Nested Object (Not the Outer One)

const data2 = {
  name: 'Arshad',
  info: {
    city: 'Ghazipur',
    age: 21
  }
};

//  Freeze only the nested object
Object.freeze(data2.info);

//  This change will work (outer object is not frozen)
data2.name = 'Ahmed';

//  This change will NOT work (nested object is frozen)
data2.info.city = 'Delhi';

console.log(data2);

// Question: 8
const student5 = {
  name: 'Arashad',
  age: 21,
  course: 'Front End',
  group: 'A'
}
console.log(student5.course);

// Question: 9
delete student5.group
console.log(student5);

// Question: 10
const car2 = {
  brand: 'Audi',
  model: 'Q7',
  year: 2025
}
car2.color = 'Black'
console.log(car2);

// Question: 11
console.log('brand' in car2);
console.log('age' in car2);

