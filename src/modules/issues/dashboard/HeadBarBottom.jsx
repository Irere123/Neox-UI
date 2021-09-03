import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import { Link } from "react-router-dom";

import AddIssueModal from "./AddIssueModal";

const team = ({ id, letter }) => (
  <Link to={`/view-team/${id}`} key={`team-${id}`}>
    <div className="home_team_list_item">{letter}</div>
  </Link>
);

function HeadBarBottom({ teams, teamsName, userId, teamIds }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="homepage_team__wrapper">
      <h2>Your Teams</h2>
      <div className="header-items">
        <div className="homepage_team_list">
          {teams.map(team)}
          <Link key="add-team" to="/create-team">
            <div className="home_team_list_item">+</div>
          </Link>
        </div>
        <div onClick={() => setOpen(!open)}>
          <button className="btn__newIssue">New issue</button>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <AddIssueModal
            userId={userId}
            teamsName={teamsName}
            onClose={() => setOpen(!open)}
            teamIds={teamIds}
          />
        </Modal>
      )}
    </div>
  );
}

export default HeadBarBottom;
