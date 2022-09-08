import { NavLink } from "react-router-dom";
import React from "react";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                >
                Products   
            </NavLink>
            <NavLink
                to="/products"
                style={linkStyles}
                >
                Products   
            </NavLink>
            <NavLink
                to="/buyers"
                style={linkStyles}
                >
                Buyers
            </NavLink>
        </div>
    )
}
export default NavBar;