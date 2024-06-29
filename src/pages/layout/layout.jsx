import React from "react";
import '../../styles/layout.css';
import Navbar from "./navbar";
import { Outlet,Navigate} from "react-router-dom";
const Layout = ()=>{
    if(!localStorage.getItem('token')) return <Navigate to="/login"/>
    return(
        <div className="grid-container">
            <Navbar />
            <header className="grid-header"></header>
            <div className="grid-section"> 
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;