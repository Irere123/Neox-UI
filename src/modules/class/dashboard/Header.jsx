import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/classPage/CDashboard.css";

function Header() {
  return (
    <div className="classPage__navbar">
      <h1 className="NeoxLogo__dashboard_class">NEOX</h1>
      <Link to="/main">
        <h3>Home</h3>
      </Link>
    </div>
  );
}

export default Header;
