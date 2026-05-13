export const usersLoader = async () => {

const res = await fetch("https://jsonplaceholder.typicode.com/users")

return res.json()

}