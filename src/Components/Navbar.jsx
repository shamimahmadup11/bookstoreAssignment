import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="subnavbar">
        <div className="logo">BookStore</div>

        {/* Hamburger icon */}
        <button 
          className="menu-icon" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Navbar items */}
        <ul className={`navbarItems ${menuActive ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/catagory">Categories</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Login button */}
        <div>
          <Link to="/login" className="button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
