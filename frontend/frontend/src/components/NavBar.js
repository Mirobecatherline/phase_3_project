import { NavLink } from "react-router-dom";
import React from "react";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "light-blue",
    textDecoration: "none",
    color: "white",
    
  };
function NavBar() {
    return (
        <div class="navbar navbar-dark bg-dark" style={{width:"80%",display:"block",margin:"15px auto"}}>
          
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
            <NavLink
                to="/retailors"
                style={linkStyles}
                >
                Retailors
            </NavLink>
        </div>
    )
}
export default NavBar;