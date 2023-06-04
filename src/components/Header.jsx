import React from "react";
import logo from '../images/react-logo.png'
import '../main.css'
const Header = () =>{
    return (
        <nav id="header-section">
            <div className="first-navbar-content">
                <img src={logo} alt="react-logo" className="logo"/>
                <h3 className="text">ReactFacts</h3>
            </div>
            <div className="second-navbar-content">
                <h3>React course from Scrimba - Project 1</h3>
            </div>
        </nav>
    );
}

export default Header;