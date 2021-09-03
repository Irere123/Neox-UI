import { Message } from "@material-ui/icons";
import React from "react";

function MessageInput() {
  return (
    <div className="ClassChatMessage__input">
      <div className="ClassChatMessage__icon">
        <Message />
      </div>
      <input type="text" placeholder="Message #Bob" />
    </div>
  );
}

export default MessageInput;
