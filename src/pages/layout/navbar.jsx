import { Icon } from "@iconify/react";
import '../../styles/navbar.css'
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <nav className="grid-nav">
      <div className="nav-title">
        <h1>CipherGuard</h1>
      </div>
      <ul className="nav-list-links">
        <li>
          <Icon className="menu-icon" icon="carbon:home" /> <h2><Link to="/">Home</Link> </h2>
        </li>
        <li>
          <Icon className="menu-icon" icon="material-symbols-light:password" />{" "}
          <h2><Link to="/logins">Websites Accounts</Link></h2>
        </li>
        <li>
          <Icon className="menu-icon" icon="quill:creditcard" />
          <h2>Credit Card</h2>
        </li>
      </ul>
      <div className="info-account">
        <Icon className="account-icon" icon="solar:user-outline" /> 
        <h2>Ismael</h2>
        <button onClick={handleLogout}> Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;