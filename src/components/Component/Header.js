import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/BrainFlix-logo.svg";

function Header() {
  const handleLogoClick = () => {
    window.location.href = "../../../public/index.html";
  };
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo--image"
          src={logo}
          alt="logo image"
          onClick={handleLogoClick}
        />
      </div>
      <div className="header__search">
        <input
          className="header__search--input"
          type="text"
          placeholder="Search"
        />
        <button className="header__search--button">UPLOAD</button>
      </div>
      <div className="header__avatar"></div>
    </header>
  );
}

export default Header;