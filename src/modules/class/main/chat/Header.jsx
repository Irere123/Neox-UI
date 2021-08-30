import {
  Headset,
  Maximize,
  PhoneCallback,
  VideoCall,
} from "@material-ui/icons";
import React from "react";

function Header() {
  return (
    <div className="ClassChatHeader">
      <VideoCall />
      <PhoneCallback />
    </div>
  );
}

export default Header;
