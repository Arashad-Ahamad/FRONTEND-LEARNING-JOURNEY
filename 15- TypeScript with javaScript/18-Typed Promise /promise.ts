// Question 1:
const user1: Promise<string> = new Promise((resolve) => {
    resolve('Arashad')
})

async function main() {
    const result = await user1
    console.log(result);

}
main()
// Question 2:
const num: Promise<number> = new Promise((resolve) => {
    resolve(100)

})

async function number() {
    const numResult = await num
    console.log(numResult);

}

number()

// Question 3:

interface User {
    id:number
    name:string
    username:string
    email:string
}

async function getUser():Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?utm_source')
    const data = await response.json()
    return data
    console.log(data);
}
const showData = getUser()
showData.then((data) => {
    console.log(data);
});
