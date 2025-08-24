import { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default HeaderComponent;
