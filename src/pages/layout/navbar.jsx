import { Icon } from "@iconify/react";
import '../../styles/navbar.css'
import React from "react";

const Navbar = () => {
  return (
    <nav className="grid-nav">
      <div className="nav-title">
        <h1>CipherGuard</h1>
      </div>
      <ul className="nav-list-links">
        <li>
          <Icon className="menu-icon" icon="carbon:home" /> <h2> Home</h2>
        </li>
        <li>
          <Icon className="menu-icon" icon="material-symbols-light:password" />{" "}
          <h2>Logins</h2>
        </li>
        <li>
          <Icon className="menu-icon" icon="quill:creditcard" />
          <h2>Credit Card</h2>
        </li>
      </ul>
      <div className="info-account">
        <Icon className="menu-icon" icon="solar:user-outline" /> <h2>Ismael</h2>
      </div>
    </nav>
  );
};

export default Navbar;