import React, { useState } from "react";
import logo from "../Assets/nawi.png?as=webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Support Us",
      url: "/support",
    },
    {
      text: "Fundraising Goals",
      url: "/fundraising",
    },
    {
      text: "News",
      url: "/news",
    },
    {
      text: "Impact",
      url: "/impact",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className={showMenu ? "open" : ""}></div>
        <div className={showMenu ? "open" : ""}></div>
        <div className={showMenu ? "open" : ""}></div>
      </div>

      <div className={`navbar-links-container ${showMenu ? "show" : ""}`}>
        {menuOptions.map((item) => (
          <Link key={item.text} to={item.url} className="navbar-link">
            {item.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
