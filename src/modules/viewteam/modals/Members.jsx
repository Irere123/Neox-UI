import React from "react";
import { Avatar } from "@material-ui/core";
import { Close } from "@material-ui/icons";

import "../../../styles/viewteamPage/Members.css";

function Members({ onClose, teamName, members, username }) {
  return (
    <div className="membersModal">
      <div className="MembersModal__header">
        <h2>Members</h2>
        <div className="close-icon">
          <div className="icon" onClick={onClose}>
            <Close />
          </div>
        </div>
      </div>

      <div className="members__list">
        <div className="members__names">
          {members.map((member) => (
            <div className="memberName__card">
              <Avatar>
                {member.username.charAt(0).toUpperCase()}
                {member.username
                  .charAt(Math.floor(member.username.length / 3))
                  .toUpperCase()}
              </Avatar>
              <div className="userDetails__info">
                {member.username !== username ? (
                  <p>{member.username}</p>
                ) : (
                  <p>{member.username} (you)</p>
                )}
                <p>{member.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
