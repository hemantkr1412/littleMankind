import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <div className="menu">
      <div className="menuIcon" onClick={toggleMenu}>
        <img src="/assets/menu.webp" />
      </div>
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menuLogo">
          <img
            onClick={toggleMenu}
            className="leftArrow"
            src="/assets/leftArrow.webp"
          />
          <Link to="/" onClick={toggleMenu}>
            <img className="Mlogo" src="/assets/Mlogo.webp" />
          </Link>
        </div>
        <div className="menuList">
          <p>Institucional</p>
          <div className="mRedLine" />
          <Link to="/comunidadAcademica" onClick={toggleMenu}>
            <p>Comunidad academica</p>
          </Link>
          <div className="mRedLine" />
          <p>Propuesta académica</p>
          <div className="mRedLine" />
          <p>Noticias</p>
          <div className="mRedLine" />
          <p>Buscador</p>
          <div className="mRedLine" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;