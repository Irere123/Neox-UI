import React from "react";

import "../styles/CDashboard.css";
import Cards from "../../modules/class/dashboard/Cards";
import Header from "../../modules/class/dashboard/Header";

function CDashboard() {
  return (
    <div className="classPage__layout">
      <Header />
      <div className="classPage_cards">
        <Cards />
      </div>
    </div>
  );
}

export default CDashboard;
