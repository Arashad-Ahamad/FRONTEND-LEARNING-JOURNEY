// -------------------------------
// Optional Chaining ?.
// -------------------------------

// Example 1:
const user = {
    name: 'Arashad',
    adress: {
        city: 'Ghazipur'
    }
}

console.log(user?.name);
console.log(user?.adress?.city);
console.log(user?.profile?.state);

// Example 2:
const apiResponse = {
    user: {
        profile: {
            email: '96arashad@gmail.com'
        }
    }
}

console.log(apiResponse?.user?.profile?.email);
console.log(apiResponse?.user?.profile?.phone);

// Example 3:
let user2 = {
    greet() {
        return 'Hello Arashad'
    }
}

let user3 = {}

console.log(user2.greet?.())
console.log(user3.greet?.());

// Example 4:

const user4 = ['Arashad', 'Ahamad']
console.log(user4?.[0]);
console.log(user4?.[1]);
console.log(user4?.[5]);

// Example 5:
const student = {
    name: 'Arashad',
    marks: {
        math: 95,
        science: 89
    }
}

const subject1 = 'math'
const subject2 = 'english'

console.log(student?.marks?.[subject1]);
console.log(student?.marks?.[subject2]);