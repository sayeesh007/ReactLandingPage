import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/brand_logo.png" alt="logo" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
