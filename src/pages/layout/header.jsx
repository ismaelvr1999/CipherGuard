import React from "react";
import '../../styles/header.css'

const Header = ({children,title})=>{
    return (
        <header className="grid-header">
            <h2>{title}</h2>
            {children}
        </header>
    );
}
export default Header;