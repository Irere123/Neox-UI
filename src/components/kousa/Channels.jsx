import React from "react";
import { Link } from "react-router-dom";
import { AddCircle as Icon } from "@material-ui/icons";

import "../../styles/kousa/Channels.css";

const channel = ({ id, name }, teamId) => (
  <Link key={`channel-${id}`} to={`/view-team/${teamId}/${id}`}>
    <li className="sidebar_list_item">
      <span style={{ fontSize: "20px" }}>#</span> {name}
    </li>
  </Link>
);

const dmChannel = ({ id, name }, teamId) => (
  <li key={`user-${id}`} className="sidebar_list_item">
    <Link to={`/view-team/${teamId}/${id}`}>
      <span className="green">●</span> {name}
    </Link>
  </li>
);

function Channels({
  teamName,
  username,
  channels,
  dmChannels,
  onAddChannelClick,
  teamId,
  onInvitePeopleClick,
  isOwner,
  onDirectMessageClick,
}) {
  return (
    <div className="channel__wrapper">
      <div className="push_left">
        <h1 className="team_name_header">{teamName}</h1>
        <h3 className="username">{username}</h3>
      </div>

      <ul className="sidebar_list">
        <li className="sidebar_list_header">
          Channels
          {isOwner && <Icon onClick={onAddChannelClick} />}
        </li>
        {channels.map((c) => channel(c, teamId))}
      </ul>
      <ul className="sidebar_list">
        <li className="sidebar_list_header">
          Chats <Icon onClick={onDirectMessageClick} />
        </li>
        {dmChannels.map((dmC) => dmChannel(dmC, teamId))}
      </ul>

      {isOwner && (
        <Link to="#invitePeople">
          <ul className="sidebar_list">
            <li className="invite-link" onClick={onInvitePeopleClick}>
              + Invite People
            </li>
          </ul>
        </Link>
      )}
    </div>
  );
}

export default Channels;
