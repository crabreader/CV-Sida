import React from "react";
import { toggleMenu } from "../resources/main";

function MenuButton() {
    return <button className="menu-button" onClick={toggleMenu}>Meny</button>;
}

export default MenuButton;