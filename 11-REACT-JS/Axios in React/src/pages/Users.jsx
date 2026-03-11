import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import Loder from '../components/Loader'
import { getUsers } from '../services/userService'
function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])
  if (loading) return <Loder />
  if (error) return <p>{error}</p>
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}
export default Users
