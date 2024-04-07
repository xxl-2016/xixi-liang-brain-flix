import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo--image" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__search">
        <input
          className="header__search--input"
          type="text"
          placeholder="Search"
        />
        <Link to="/upload">
          <button className="header__search--button">UPLOAD</button>
        </Link>
      </div>
      <div className="header__avatar"></div>
    </header>
  );
}

export default Header;
