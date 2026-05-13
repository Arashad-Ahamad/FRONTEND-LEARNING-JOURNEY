// responseText
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1')
xhr.onload = () => {
  console.log(xhr.responseText);
  let data = JSON.parse(xhr.responseText)
  console.log(data.name);
}
xhr.send()

// responseType
const xhr2 = new XMLHttpRequest()
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
xhr2.responseType = 'json'

xhr2.onload = ()=> {
console.log(xhr2.response);
}
xhr2.send()

// Normal Function
function hello() {
  console.log('Hello World');
}
hello()

// Callback Function
// Example 1:
setTimeout(() => {
  console.log('Hii');
},2000)

// Example 2:
function greet(Callback) {
  console.log('Step 1');
  Callback()
}
function sayHello() {
  console.log('Step 2');
}
greet(sayHello)

// ----------------------------------------
// Callback Hell
// ----------------------------------------

// Example 1:
setTimeout(() => {
console.log('Step 1');
setTimeout(()=> {
  console.log('Step 2');

  setTimeout(()=> {
    console.log('Step 3');
  }, 1000)
}, 1000)
}, 1000)

// Example 2:
function step1(callback) {
  console.log('Step 1 complete');
  callback()
}

function step2(callback) {
  console.log('Step 2 complete');
  callback()
}

function step3() {
  console.log('Step 3 complete');
}

step1(function() {
  step2(function() {
    step3();
  });
});

//  XHR Callback Hell
let xhr3 = new XMLHttpRequest()
xhr3.open('GET', 'https://dummyjson.com/users')
xhr3.onload = ()=> {
  console.log('Users List:', JSON.parse(xhr3.responseText));

let xhr4 = new XMLHttpRequest()
xhr4.open('GET', 'https://dummyjson.com/users/1')
xhr4.onload = ()=> {
  console.log('User Details:', JSON.parse(xhr4.responseText));

  let xhr5 = new XMLHttpRequest()
  xhr5.open('GET', 'https://dummyjson.com/posts/user/1')
  xhr5.onload = ()=> {
    console.log('User Posts:', JSON.parse(xhr5.responseText));
  }
  xhr5.send()
}
xhr4.send()
}
xhr3.send()