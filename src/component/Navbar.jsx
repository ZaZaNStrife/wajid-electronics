import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/clients", label: "Clients" },
    { path: "/categories", label: "Categories" },
    { path: "/team", label: "Team" },
    { path: "/qna", label: "Q&A" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <span className="highlight">Gujranwala</span> Electronics
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          {navLinks.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link to={item.path} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
