import React, { useState } from "react";
import "../css/Navbar.css";
import logo_img from "../../Assets/logo_img.png";
import ArrowRight from "../../Assets/ArrowRight (1).png";

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo_img} alt="Logo" />
        Founder's Friday
      </div>
      <div className={`header-details ${isMenuOpen ? "open" : ""}`}>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Gallery</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button
          className={`register-btn ${isAnimating ? "active" : ""}`}
          onClick={handleButtonClick}
        >
          Register <img src={ArrowRight} alt="Arrow" />
        </button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
    </header>
  );
};

export default Navbar;
