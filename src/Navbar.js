import React from "react";
// import logo from './images/logo.svg';
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>SEK-INC</h3>
          </Link>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/services">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                service
              </button>
            </Link>
          </li>
          <li>
            <Link to="/developers">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                team
              </button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <button className="link-btn" onMouseOver={displaySubmenu}>
                projects
              </button>
            </Link>
          </li>
        </ul>
        <Link to="/contact-us">
          <button className="btn signin-btn">Contact Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
