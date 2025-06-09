import React, { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mohammed Aiman</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("experience")}>Experience</li>
        <li onClick={() => handleScroll("education")}>Education</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("activities")}>Additional</li>
      </ul>
    </nav>
  );
};

export default Navbar;


