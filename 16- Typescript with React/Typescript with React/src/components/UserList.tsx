interface User {
    id:number
    name: string
    age:number
}

export function UserList () {
    const user:User[] = [
        {id:1, name:'Arashad', age:21},
        {id:2, name:'Aman', age:28},
        {id:3, name:'Ahad', age:10}

    ]
    return (
        <div>
            <h1>User List</h1>
            {user.map((user)=> (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>

                </div>

            ))}
        </div>
    )
}