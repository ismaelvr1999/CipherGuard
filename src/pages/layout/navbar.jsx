import { Icon } from "@iconify/react";
import "../../styles/layout/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="grid-nav">
      <div className="nav-title">
        <h1>CipherGuard</h1>
      </div>
      <Link className="link" to="/">
        <Icon className="menu-icon" icon="carbon:home" /> <h2>Home</h2>
      </Link>
      <Link className="link" to="/website-accounts">
        <Icon className="menu-icon" icon="material-symbols-light:password" />{" "}
        <h2>Websites Accounts</h2>
      </Link>
      <Link className="link" to="/cards">
        <Icon className="menu-icon" icon="quill:creditcard" />{" "}
        <h2>Cards</h2>
      </Link>
      <Link className="link" to="/passports">
        <Icon className="menu-icon" icon="solar:passport-outline" />{" "}
        <h2>Passports</h2>
      </Link>
      <div className="info-account">
        <Icon className="account-icon" icon="solar:user-outline" />
        <h2>Ismael</h2>
        <button onClick={handleLogout}> Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
