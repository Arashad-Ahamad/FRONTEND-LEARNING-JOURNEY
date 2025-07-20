// ----------------------------------
//  parantElement property
// ----------------------------------
// Example 1:
const anchor =document.querySelector('a')
console.log(anchor.parentElement);
console.log(anchor.parentElement.parentElement);
console.log(anchor.parentElement.parentElement.parentElement);
console.log(anchor.parentElement.parentElement.parentElement.parentElement);

// Example 2:
const b = document.querySelector('li')
console.log(b.parentElement);

// Example 3:
const c = document.querySelector('img')
console.log(c.parentElement);

// ----------------------------------
//  children property
// ----------------------------------
// Example 4:
const d = document.querySelector('#box')
console.log(d.children);

// Example 5:
const e = document.querySelector('#hyper')
console.log(e.children);
console.log(e.children[0]);
console.log(e.children[1]);

// Example 6:
const parent =document.querySelector('#parent')
console.log(parent.children);
console.log(parent.children[0]);
console.log(parent.children[1]);
console.log(parent.children[2]);
console.log(parent.children[2].children);

// Example 7:
const f = document.querySelector('ol')
console.log(f.firstElementChild);
console.log(f.lastElementChild);
f.children[1].style.color = 'red'

// ----------------------------------
//  sibling property
// ----------------------------------
// Example 8:
const g = document.querySelector('#second')                                                                                                                                           
console.log(g.nextElementSibling);
console.log(g.previousElementSibling);

