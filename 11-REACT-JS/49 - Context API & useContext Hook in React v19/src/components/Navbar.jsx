import { useContext } from "react"
import {UserContext} from '../context/UserContext'
function Navbar() {
    const user = useContext(UserContext)
    return (
        <>
        <h1>Welcome {user.name}</h1>
        </>
    )
}
export default Navbar