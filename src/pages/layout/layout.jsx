import React from "react";
import '../../styles/layout/layout.css';
import Navbar from "./navbar";
import { Outlet,Navigate} from "react-router-dom";
const Layout = ()=>{
    if(!localStorage.getItem('token')) return <Navigate to="/login"/>
    return(
        <div className="grid-container">
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;