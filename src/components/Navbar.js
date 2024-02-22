import React from "react";
import { Link } from "react-router-dom";
import { toggleMenu } from "../resources/main";

function Navbar() {
    return (
        <nav className="navbar" id="test">
            <button className="menu-close" onClick={toggleMenu}>X</button>
            <ul>
                <Link to={`/`}><li>Hem</li></Link>
                <Link to={`/cv`}><li>CV</li></Link>
                <Link to={`/portfolio`}><li>Portfolio</li></Link>
                <Link to={`/hmm`}><li>???</li></Link>
                <Link to={`/lorem`}><li>Lorem</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;