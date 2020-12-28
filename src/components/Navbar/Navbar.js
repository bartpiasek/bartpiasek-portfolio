import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscListSelection, VscClose } from "react-icons/vsc";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          BART PIASEK dev
        </Link>
        <div className="menu-icon" onClick={handleClicked}>
          {clicked ? <VscClose /> : <VscListSelection />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/me" className="nav-links">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              My Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/learning-path" className="nav-links">
              How I learn?
            </Link>
          </li>
          <li className="nav-item">
            <Link to="http://github.com/bartpiasek" className="nav-links">
              GitHub
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
