//  Two separate objects with same data but different memory
const profile1 = {
    firstName: 'Arashad',
    lastName: 'Ahamad',
    age: 21,
    education: 'BA geography',
    city: 'Ghazipur',
};

const profile2 = {
    firstName: 'Arashad',
    lastName: 'Ahamad',
    age: 21,
    education: 'BA geography',
    city: 'Ghazipur',
};

console.log(profile1 === profile2); // false
//  Reason: Even though data is same, both objects are stored in different memory locations.

//  One object with two references (same memory)
const profile3 = {
    firstName: 'Arashad',
    lastName: 'Ahamad',
    age: 21,
    education: 'BA geography',
    city: 'Ghazipur',
};

const profile4 = profile3; // profile4 is pointing to same object as profile3

console.log(profile4 === profile3); // true
//  Reason: Both variables point to the same memory location (same object)

//  Practice 1
const userA  = {
  firstname: 'Adrash'
};

// console.log(userA.age); // undefined (no such property)
console.log(userA['first' + 'name']); // 'Adrash'
//  Reason: 'firstname' is accessed using computed string

//  Practice 2
const userB = {
  firstname: 'Ayan',
  lastName: 'Ahmed',
  address: {
    city: 'Bangalore',
    pincode: 1234,
    moreDetails: {
      Population: 1332241,
      area: '1234 sq km'
    }
  }
};

// Adding new properties dynamically
userB.age = 21; // adds age property
userB['is-Student'] = true; // adds a key with dash using bracket notation

console.log(userB); // Shows the full object with new properties
console.log(userB.address.city); // 'Bangalore'
console.log(userB.address.moreDetails.area); // '1234 sq km'

// Adding a new nested property
userB.address.moreDetails.weather = 'Nice'; // adds weather key inside moreDetails

console.log(userB.address.moreDetails.weather); // 'Nice'