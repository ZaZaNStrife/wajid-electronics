import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      closeMenu();
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "products", "clients", "team", "contact"];
      const scrollPos = window.scrollY + 150;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={() => handleScrollTo("hero")}>
        <span className="highlight">Gujranwala</span> Electronics
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "products", label: "Products" },
            { id: "clients", label: "Clients" },
            { id: "team", label: "Team" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
            >
              <button onClick={() => handleScrollTo(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Menu */}
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
