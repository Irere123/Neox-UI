import React from "react";
import { Link } from "react-router-dom";
import { AddCircle as Icon } from "@material-ui/icons";

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

export default class DrawerChannels extends React.Component {
  render() {
    const {
      teamName,
      username,
      channels,
      dmChannels,
      isOwner,
      teamId,
      onItemClick,
    } = this.props;

    return (
      <div>
        <div className="channels__header">
          <h1 className="channels_team_name_header">{teamName}</h1>
          <h3 className="username">{username}</h3>
        </div>

        <ul className="sidebar_list">
          <li className="sidebar_list_header">
            Channels
            {isOwner && <Icon />}
          </li>
          <span onClick={onItemClick}>
            {channels.map((c) => channel(c, teamId))}
          </span>
        </ul>
        <ul className="sidebar_list">
          <li className="sidebar_list_header">
            Chats <Icon />
          </li>
          <span onClick={onItemClick}>
            {dmChannels.map((dmC) => dmChannel(dmC, teamId))}
          </span>
        </ul>
      </div>
    );
  }
}
