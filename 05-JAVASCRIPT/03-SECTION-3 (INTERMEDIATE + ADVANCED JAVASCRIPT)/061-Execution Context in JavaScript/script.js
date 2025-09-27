//  Example 1:
debugger
 var a = 10
 function foo() {
    var b = 20
    console.log(a + b);
 }
 foo()
 console.log('done');

 //  Example 2:
 var x = 10 
 function greet() {
   console.log('Hello');
 }
 greet()

 //  Example 3:  let behavior
// console.log(x);
// let x = 5

//  Example 4: const behavior
// console.log(y);
// const y = 10

//  Example 5: var behavior
console.log(z);
var z = 8
console.log(z);

//  Example 6:
var c = 5
function greet2(num) {
  let result = num * num
  return result
}
// debugger
var ans = greet2(c)
console.log(ans);

//  Example 7:
var name2 = 'Arashad'
function greet3() {
  var message = 'Hello'
  console.log(`${message} ${name2}`);
}
greet3()

//  Example 7:
function first() {
  console.log('inside first function');
  second()
}

function second() {
  console.log('inside second function');
}
first()