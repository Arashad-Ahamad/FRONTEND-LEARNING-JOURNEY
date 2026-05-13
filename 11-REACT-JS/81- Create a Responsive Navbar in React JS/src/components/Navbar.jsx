import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [showmenu, setShowMenu] = useState(false)
  const handleButtonToggle = ()=> {
    setShowMenu(!showmenu)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
           <h1>Arashad</h1>

          </div>
          <nav className={showmenu ? 'menu-mobile' : 'menu-web'}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <button onClick={handleButtonToggle} className="ham-menu">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  )
}
export default Navbar
