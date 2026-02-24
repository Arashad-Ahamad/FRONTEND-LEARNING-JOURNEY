import { useState } from "react"

function StateChallenge() {
    const [users, setUsers] = useState([
        { name: 'Arashad', age: 21 },
        { name: 'bob', age: 25 },
        { name: 'jack', age: 30 },
        { name: 'Angles', age: 35 }
    ])

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map((curr, index) => {
                    return (
                        <li key={index}>{curr.name} - {curr.age}</li>
                    )

                })}
            </ul>

        </>
    )
}

export default StateChallenge