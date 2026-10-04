function getValue<T>(value:T):T {
    return value

}

const name = getValue('Arashad')
const age = getValue(10)

console.log(name);
console.log(age);


// Generic with Array

function getFirst<T>(items:T[]):T {
    return items[0]!

}

const name1 = getFirst(['Arashad', 'aman', 'ahad'])
const num = getFirst([10, 20, 30])

console.log(name1);
console.log(num);


