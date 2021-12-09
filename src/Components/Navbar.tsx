import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple darken-2 px1">
        <a href="/" className="brand-logo">
          React TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
