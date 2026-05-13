// getAttribute() - Attribute Access
const el = document.querySelector('.css-image');
console.log(el.getAttribute('class'));

const user = document.querySelector('a');
console.log(user.getAttribute('title'));
console.log(user.getAttribute('target'));

// setAttribute() - New Attribute Create
const newAtt = document.querySelector('#box');
newAtt.setAttribute('title', 'Hello World');
newAtt.setAttribute('name', 'Arashada');

const id = document.querySelector('h1');
id.setAttribute('id', 'heading');

// Attribute value change
const valueChange = document.querySelector('#hyper');
valueChange.setAttribute('id', 'Arashad');
