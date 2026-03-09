import { useEffect, useState } from "react";

function App(){

const [users,setUsers] = useState([]);

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

useEffect(()=>{

fetch(`${API_URL}/users?key=${API_KEY}`)
.then(res => res.json())
.then(data => setUsers(data))

},[])

return(

<div>

<h1>Users List</h1>

{users.map(user => (

<p key={user.id}>{user.name}</p>

))}

</div>

)

}

export default App;