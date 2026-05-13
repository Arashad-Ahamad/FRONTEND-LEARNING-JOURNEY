
import { useLoaderData } from "react-router-dom";

function Users(){

const users = useLoaderData();

return(

<div>

<h2>Users</h2>

{users.map(user => (
<p key={user.id}>{user.name}</p>
))}

</div>

)

}

export default Users;