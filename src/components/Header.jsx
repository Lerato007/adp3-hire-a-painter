import React from "react";
import "../syles/Header.css";

// ::return:: This code renders a Navbar as our page header with the title of the website
// ::TODO:: - Add Sign in / Register button?

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Hire A Painter</h1>
      </div>
      <div className="header__center"></div>
    </div>
  );
}

export default Header;
