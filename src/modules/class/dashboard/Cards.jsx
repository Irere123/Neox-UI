import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "../../styles/CDashboard.css";

function Cards() {
  return (
    <div className="classPage__cardList">
      <div className="classPage_card">
        <div className="classPage__teamName">
          <h1>YOU</h1>
        </div>
        <div className="classPage__card__details">
          <Avatar>JD</Avatar>
          <div className="classPage__card__details_info">
            <h4>Jack Dorsery</h4>
            <p>on June 2021</p>
          </div>
        </div>
        <div className="classPage__card__viewBtn">
          <Link to="/class/id">
            <button>Enter</button>
          </Link>
        </div>
      </div>
      <div className="classPage_card">
        <div className="classPage__teamName">
          <h1>ECS</h1>
        </div>
        <div className="classPage__card__details">
          <Avatar>JD</Avatar>
          <div className="classPage__card__details_info">
            <h4>Moise MU</h4>
            <p>on June 2021</p>
          </div>
        </div>
        <div className="classPage__card__viewBtn">
          <Link to="/class/id">
            <button>Enter</button>
          </Link>
        </div>
      </div>
      <div className="classPage_card">
        <div className="classPage__teamName">
          <h1>phy</h1>
        </div>
        <div className="classPage__card__details">
          <Avatar>JD</Avatar>
          <div className="classPage__card__details_info">
            <h4>Holla Man</h4>
            <p>on June 2021</p>
          </div>
        </div>
        <div className="classPage__card__viewBtn">
          <Link to="/class/id">
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
