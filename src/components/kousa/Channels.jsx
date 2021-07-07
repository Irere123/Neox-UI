import React from "react";
import "../../styles/kousa/Channels.css";

function Channels() {
  return (
    <div className="channel__wrapper">
      <div className="push_left">
        <h1 className="team_name_header">Business Team</h1>
        <h3 className="username">John Doe</h3>
      </div>
      <ul className="sidebar_list">
        <li className="sidebar_list_header">Channels</li>
        <li className="sidebar_list_item"># general</li>
        <li className="sidebar_list_item"># random</li>
      </ul>
      <ul className="sidebar_list">
        <li className="sidebar_list_header">Chats</li>
        <li className="sidebar_list_item">● Kenny</li>
        <li className="sidebar_list_item">● Jordan</li>
      </ul>
      <ul className="sidebar_list">
        <li className="invite-link">+ Invite People</li>
      </ul>
    </div>
  );
}

export default Channels;
