import React from "react";

import { Bookmark, SettingsOutlined, Subject } from "@material-ui/icons";

function Navbar() {
  return (
    <div className="classPage__navIcons">
      <Bookmark />
      <Subject />
      <SettingsOutlined />
    </div>
  );
}

export default Navbar;
