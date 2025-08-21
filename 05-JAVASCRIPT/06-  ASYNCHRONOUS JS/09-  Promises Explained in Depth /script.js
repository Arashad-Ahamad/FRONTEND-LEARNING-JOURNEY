// Question 1:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello World')
  }, 2000)
})

p1.then((result) => {
  console.log(result)
})

// Question 2:
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Something went wrong')
  }, 3000)
})
p2.catch((error) => {
  console.log(error)
})

// Question 3:
const p3 = new Promise((resolve, reject) => {
  resolve(5)
})

p3.then((num) => num * 2)
  .then((num) => num + 3)
  .then((num) => console.log(num))

// Question 4:
const p4 = new Promise((resolve, reject) => {
  let isSunny = true
  if (isSunny) {
    resolve("Let's go outside!")
  } else {
    reject('Stay inside')
  }
})

p4.then((message) => console.log(message)).catch((error) => console.log(error))

// Question 5:
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Task Done')
  }, 1000)
})
p5.then((result) => console.log(result)).finally(() =>
  console.log('Promise checked')
)

// Question 6:
const p6 = new Promise((resolve, reject) => {
  let waterBoiled = true
  if (waterBoiled) {
    resolve('Tea is ready!')
  } else {
    reject('Water is not boiled!')
  }
})

p6.then((message) => console.log(message))
  .catch((error) => console.log(error))
  .finally(() => console.log('Task complete'))

// Question 7:  Promise.all()
const p7 = Promise.resolve('Pizza')
const p8 = Promise.reject('Cold Drink not available')
const p9 = Promise.resolve('Burger')

Promise.all([p7, p8, p9])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))

// Question 8:  Promise.all()
const p10 = Promise.resolve('Pizza')
const p11 = Promise.resolve('Cold Drink')
const p12 = Promise.resolve('Burger')

Promise.all([p10, p11, p12])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))

// Question 9: Promise.allSettled()

const p13 = Promise.resolve('Pizza')
const p14 = Promise.reject('Cold Drink not available')
const p15 = Promise.resolve('Burger')

Promise.allSettled([p13, p14, p15]).then((result) => console.log(result))

// Question 10: Promise.race()
const fast = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fast one')
  }, 200)
})

const slow = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Slow one')
  }, 100)
})

const fail = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Failed one')
  }, 400)
})

Promise.race([fast, slow, fail])
  .then((result) => console.log('Winner:', result))
  .catch((err) => console.log('ace error:', err))

// Question 11: Promise.any()

const p16 = Promise.resolve('Pizza')
const p17 = Promise.reject('Cold Drink not available')
const p18 = Promise.resolve('Burger')

Promise.any([p16, p17, p18])
  .then((result) => console.log('First success:', result))
  .catch((err) => console.log('Error:', err))

// Question 12:
const p19 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Pizza ready!')
  }, 2000)
})

const p20 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Burger ready!')
  }, 3000)
})

const p21 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Fries not available')
  })
})

Promise.all([p19, p20, p21])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
Promise.allSettled([p19, p20, p21]).then((result) => console.log(result))
Promise.race([p19, p20, p21])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
Promise.any([p19, p20, p21])
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
