import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const handleCloseMenu = () => {
    setShow(false);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" onClick={handleCloseMenu}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile active" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={handleCloseMenu}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleCloseMenu}>About</NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={handleCloseMenu}>Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleCloseMenu}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;