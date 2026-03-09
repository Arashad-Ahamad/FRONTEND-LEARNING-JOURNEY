import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Setting from './pages/Setting'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
        <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
