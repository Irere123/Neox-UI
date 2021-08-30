import React from "react";

import "../styles/CDashboard.css";
import Cards from "../../components/class/Cards";
import Header from "../../components/class/Header";

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
