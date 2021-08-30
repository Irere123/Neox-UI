import React from "react";

import "../styles/classPage/Class.css";
import Header from "../modules/class/main/chat/Header";
import MessageInput from "../modules/class/main/chat/MessageInput";
import Messages from "../modules/class/main/chat/Messages";

function ClassChatContainer() {
  return (
    <div className="ClassChat__card">
      <Header />
      <Messages />
      <MessageInput />
    </div>
  );
}

export default ClassChatContainer;
