import React from "react";
import { Link } from "react-router-dom";

import "../../../styles/viewteamPage/Drawer.css";
import DrawerChannels from "./DrawerChannels";

const teamMapped = ({ id, letter }) => (
  <Link to={`/view-team/${id}`} key={`team-${id}`}>
    <div className="team__list__item">{letter}</div>
  </Link>
);

function DrawerContent({ teams, onItemClick, team, username }) {
  const regularChannels = [];
  const dmChannels = [];

  team.channels.forEach((c) => {
    if (c.dm) {
      dmChannels.push(c);
    } else {
      regularChannels.push(c);
    }
  });

  return (
    <div className="drawer-sidebar">
      <div className="teams">
        <span onClick={onItemClick}>{teams.map(teamMapped)}</span>
        <Link key="add-team" to="/create-team">
          <div className="team__list__item">+</div>
        </Link>
      </div>
      <div className="channels">
        <DrawerChannels
          teamId={team.id}
          teamName={team.name}
          isOwner={team.admin}
          username={username}
          channels={regularChannels}
          dmChannels={dmChannels}
          onItemClick={onItemClick}
        />
      </div>
    </div>
  );
}

export default DrawerContent;
