import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css";

class Header extends Component {
    render() {
      return (
        <header>
          <div className="links">
            <NavLink exact to="/">
              Home Page
            </NavLink>
            <NavLink to="/dogs">dogs</NavLink>
            <NavLink to="/cats">cats</NavLink>
          </div>
        </header>
      );
    }
  }
  
  export default Header;
  