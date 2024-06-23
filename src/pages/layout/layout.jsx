import React from "react";
import '../../styles/layout.css';
import Navbar from "./navbar";
const Layout = ()=>{
    return(
        <div className="grid-container">
            <Navbar />
            <header className="grid-header"></header>
            <div className="grid-section"></div>
        </div>
    );
}

export default Layout;