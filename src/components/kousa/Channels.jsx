import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AddCircle as Icon,
  Facebook,
  PersonAdd,
  SettingsOutlined,
} from "@material-ui/icons";
import { Avatar, Modal } from "@material-ui/core";

import "../../styles/kousa/Channels.css";
import SettingsModal from "./modals/SettingsModal";

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
  teamCreator,
}) {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="channel__wrapper">
      <div className="channelList__container">
        <div className="teamNameMore__flex">
          <div className="push_left">
            <h1 className="team_name_header">
              {teamName.length < 10 ? teamName : <>{teamName.slice(0, 8)}...</>}
            </h1>
          </div>
        </div>

        <div className="channelsList__flex">
          <ul className="sidebar_list">
            <li className="sidebar_list_header">
              Channels
              {isOwner && (
                <span onClick={onAddChannelClick}>
                  <Icon />
                </span>
              )}
            </li>
            {channels.map((c) => channel(c, teamId))}
          </ul>
          <ul className="sidebar_list">
            <li className="sidebar_list_header">
              Chats
              <span onClick={onDirectMessageClick}>
                <Icon />
              </span>
            </li>
            {dmChannels.map((dmC) => dmChannel(dmC, teamId))}
          </ul>
        </div>
        {isOwner ? (
          <div className="team__settings">
            <div className="profileInfo">
              <Avatar>
                {username.charAt(0).toUpperCase()}
                {username.charAt(Math.floor(username.length / 3)).toUpperCase()}
              </Avatar>
              <div className="userInfo_settings">
                <h4>{username}</h4>
                <p>@{username}</p>
              </div>
            </div>
            <div className="inviteStuff">
              <span className="link" onClick={onInvitePeopleClick}>
                <PersonAdd />
              </span>
              <span
                className="link"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <SettingsOutlined />
              </span>
            </div>
          </div>
        ) : (
          <div className="team__settings">
            <div className="profileInfo">
              <Avatar>
                {username.charAt(0).toUpperCase()}
                {username.charAt(Math.floor(username.length / 3)).toUpperCase()}
              </Avatar>
              <div className="userInfo_settings">
                <h4>{username}</h4>
                <p>@{username}</p>
              </div>
            </div>
            <div className="inviteStuff">
              <span
                className="link"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <SettingsOutlined />
              </span>
            </div>
          </div>
        )}
      </div>
      {openSettings && (
        <Modal
          open={openSettings}
          onClose={() => setOpenSettings(!openSettings)}
        >
          <SettingsModal
            onClose={() => setOpenSettings(!openSettings)}
            teamName={teamName}
            creator={teamCreator}
            teamId={teamId}
            isAdmin={isOwner}
          />
        </Modal>
      )}
    </div>
  );
}

export default Channels;
