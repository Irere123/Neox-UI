import React from "react";

import ClassChatController from "../../controllers/ClassChatController";
import ClassController from "../../controllers/ClassController";
import "../../styles/classPage/Class.css";

function Class() {
  return (
    <div className="InternalClassPage__layout">
      <ClassController />
      <ClassChatController />
    </div>
  );
}

export default Class;
