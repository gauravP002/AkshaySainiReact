import { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

const HeaderComponent = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <FaUtensils className="icon" />
        <span>{username} FoodieApp</span>
      </div>

      {/* Desktop Nav */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default HeaderComponent;
