import { useEffect } from 'react'
import { useState } from 'react'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, SetError] = useState(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) {
          throw new Error('Server error')
        }
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        SetError('Failed to load data')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return <div>
    {users.map((curr)=>
    <p key={curr.id}>{curr.name}</p> )}
  </div>
}

export default Users
