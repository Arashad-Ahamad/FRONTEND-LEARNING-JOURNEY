import { UserContext } from './context/UserContext'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {
  const user = {
    name: 'Arashad',
    age: 21,
    email: '96arashad@gmail.com'
  }
  return (
    <>    
      <UserContext.Provider value = {user}>
        <Navbar />
      <Profile />

      </UserContext.Provider>
    </>
  )
}
export default App
