import React from "react";

import Header from "../components/Header";
import Sidebar from "../containers/Sidebar";
import MessageContainer from "../containers/MessageContainer";
import SendMessage from "../components/kousa/SendMessage";
import HeaderBar from "../components/kousa/Header";

function ViewTeam() {
  return (
    <div>
      <Header />
      <div className="viewteam_layout">
        <Sidebar />
        <HeaderBar />
        <MessageContainer />
        <SendMessage />
      </div>
    </div>
  );
}

export default ViewTeam;
