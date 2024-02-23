import React from "react";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "../resources/main";

function Navbar() {
    return (
        <nav className="navbar" id="test">
            <button className="menu-close" onClick={toggleMenu} >X</button>
            <ul>
                <NavLink to={`/`}><li>Hem</li></NavLink>
                <NavLink to={`/cv`}><li>CV</li></NavLink>
                <NavLink to={`/portfolio`}><li>Portfolio</li></NavLink>
                <NavLink to={`/mystery`}><li>???</li></NavLink>
                <NavLink to={`/lorem`}><li>Lorem</li></NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;