import React from "react";
import { Avatar } from "@material-ui/core";
import { Close, PersonAdd, Search } from "@material-ui/icons";

import "../../styles/kousa/Members.css";

function Members({ onClose, teamName, isAdmin, members, username }) {
  return (
    <div className="membersModal">
      <div className="MembersModal__header">
        <h2>{teamName} Members</h2>
        <div className="close-icon">
          <div className="icon" onClick={onClose}>
            <Close />
          </div>
        </div>
      </div>
      <div className="MembersModal__searchBar">
        <Search />
        <input type="text" placeholder="Search for members" />
      </div>
      <div className="members__list">
        <h4>Members</h4>

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
