const user = {
    firstName: 'Arashad',
    lastName: 'Ahamad',
    age: 21,
    getAgeyear() {
        return new Date().getFullYear() - user.age
    }
}
console.log(user.getAgeyear());