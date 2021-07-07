import React from "react";
import "../../styles/kousa/Teams.css";
import { Link } from "react-router-dom";

function Teams() {
  return (
    <div className="team__wrapper">
      <div className="team__list">
        <div className="team__list__item">B</div>
        <div className="team__list__item">L</div>
        <div className="team__list__item">M</div>
        <Link key="add-team" to="/create-team">
          <div className="team__list__item">+</div>
        </Link>
      </div>
    </div>
  );
}

export default Teams;
