import React from "react";

import ClassChatContainer from "../../containers/ClassChatContainer";
import ClassContainer from "../../containers/ClassContainer";
import "../styles/class/Class.css";

function Class() {
  return (
    <div className="InternalClassPage__layout">
      <ClassContainer />
      <ClassChatContainer />
    </div>
  );
}

export default Class;
