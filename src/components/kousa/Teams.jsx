import React from "react";
import { Link } from "react-router-dom";

import "../../styles/kousa/Teams.css";

const team = ({ id, letter }) => (
  <Link to={`/view-team/${id}`} key={`team-${id}`}>
    <div className="team__list__item">{letter}</div>
  </Link>
);

function Teams({ teams }) {
  return (
    <div className="team__wrapper">
      <div className="team__list">
        <div className="team__list__item">
          <span className="neox_HomePage">NE</span>
        </div>
        {teams.map(team)}
        <Link key="add-team" to="/create-team">
          <div className="team__list__item">+</div>
        </Link>
      </div>
    </div>
  );
}

export default Teams;
