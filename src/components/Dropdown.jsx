import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Dropdown.css';
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-btn">
        Pages <MdArrowDropDown />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/product" onClick={() => setIsOpen(false)}>Product</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          
        </ul>
      )}
    </div>
  );
};

export default Dropdown;