import React, { useState } from "react";
import { MdHotelClass } from "react-icons/md";
import { BiListUl } from "react-icons/bi";
import "./Navigation.css";
import { Link } from "react-router-dom";

import ContactBlock from "../../pages/Contact";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav__logo">
          <MdHotelClass className="nav__logo-icon" />
          C My Space
        </a>
        <ul className={showMenu ? "nav__menu nav__menu--show" : "nav__menu"}>
          <li className="nav__menu-item">
            <Link to="/" className="nav__menu-link">
              Home
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/" className="nav__menu-link">
              Features
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/" className="nav__menu-link">
              Pricing
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/pages/Passport" className="nav__menu-link">
              Passport
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link to="/pages/Contact" className="nav__menu-link">
              Contact
            </Link>
          </li>
        </ul>
        <button className="nav__cta">Sign Up</button>
        <button
          className={showMenu ? "nav__toggle nav__toggle--active" : "nav__toggle"}
          onClick={handleToggle}
        >
          <BiListUl className="nav__toggle-icon" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
