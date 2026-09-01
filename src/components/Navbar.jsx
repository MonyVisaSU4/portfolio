import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container">
          <p className="nav-logo">&lt;Visa&nbsp;/&gt;</p>
          <ul className={`nav-links ${isOpen ? "active" : ""}`} id="navLinks">
            <li>
              <a href="#hero" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={closeMenu}>
                Certifications
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="nav-cta" onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
          <button
            className={`nav-toggle ${isOpen ? "active" : ""}`}
            id="navToggle"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;