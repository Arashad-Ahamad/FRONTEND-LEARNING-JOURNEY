// // Example 1: Array
// const fruits = ['mango', 'apple', 'orange']
// const myFruits = fruits
// myFruits.push('grapes')

// console.log(fruits);
// console.log(myFruits);

// // Example 2: object
// const productsName = {
//   product: 'Mobile',
//   brand: 'Apple',
//   model: '14 pro max'

// }
// const newProducts = productsName
// productsName.model = '15 pro max'

// console.log(productsName);
// console.log(newProducts);

// // // Example 3:
// const user1 = 'Arashad' 
// let user2 = user1
// // user2 = 'Ali'
// console.log(user1);
// console.log(user2);

// let a = 100;
// let b = a;
 

 // Example 1:
 const user1 = {
  name: 'arashad',
  age: 21
 }
 user2 = {}
 Object.assign(user2, user1)
user2.name = 'Shahid'

 console.log(user1);
 console.log(user2); 

 // Example 2:
 const fruits = ['mango', 'apple', 'orange']
 const myFruits = []
 Object.assign( myFruits, fruits)
myFruits[0] = 'grapes'

 console.log(fruits);
 console.log(myFruits);

  // Example 3:
  const productsName = {
      product: 'Mobile',
       brand: 'Apple',
  model: '14 pro'
     }

     const newProducts = [].concat(productsName)
productsName.model = '15 pro max'
     console.log(productsName);
     console.log(newProducts);

     // Example 4:
     const roolNumber = [21, 22, 23]
     const finalRoolNumber = roolNumber.slice()
finalRoolNumber.push(24, 25)
     console.log(roolNumber);
     console.log(finalRoolNumber);