import React from "react";

import Navbar from "../modules/class/main/Navbar";
import WhiteBoard from "../modules/class/main/WhiteBoard";

function ClassContainer() {
  return (
    <div>
      <Navbar />
      <div className="whiteBoard__container">
        <WhiteBoard />
      </div>
    </div>
  );
}

export default ClassContainer;
