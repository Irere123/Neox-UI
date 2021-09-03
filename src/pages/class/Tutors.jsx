import React from "react";

import Sidebar from "../../modules/home/Sidebar";
import Header from "../../components/Header";
import "../../styles/Tutors.css";

function Tutors() {
  return (
    <div>
      <Header />
      <div className="tutorsPage__layout">
        <Sidebar />
        <div></div>
      </div>
    </div>
  );
}

export default Tutors;
