import React from "react";
import { NavLink } from "react-router-dom";

const NavTo = ({ to = "#", children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={`font-freeman text-2xl transition-colors hover:text-orange-500 ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default NavTo;
