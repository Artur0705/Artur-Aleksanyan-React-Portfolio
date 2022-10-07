import React, { useState } from "react";
import "./NavbarStyles.css";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburgerClick, setHabmburgerClick] = useState(false);
  const handleHabmburgerClick = () => setHabmburgerClick(!hamburgerClick);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> My Portfolio </h1>
      </Link>
      <ul className={hamburgerClick ? "navigation active" : "navigation"}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/project"> Projects </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleHabmburgerClick}>
        {hamburgerClick ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
