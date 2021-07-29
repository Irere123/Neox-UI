import React from "react";
import { Avatar } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

import "../../styles/kallen/Insights.css";

function Insights() {
  return (
    <div className="insights-layout">
      <div className="card-insights">
        <div className="top-card-insights">
          <Avatar src="https://avatars.githubusercontent.com/u/7872329?v=4" />
          <div className="top-card-insights-left">
            <h3>Ben Awad</h3>
            <button>Delete</button>
          </div>
        </div>
        <div className="teams-insights">
          <h2>Team</h2>
          <div className="teams_list_insights">
            <div className="team_insights">B</div>
            <div>
              <h3>Biotechs</h3>
            </div>
          </div>
          <h2>Contributors</h2>
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com//static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com//static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com//static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://material-ui.com//static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com//static/images/avatar/5.jpg"
            />
          </AvatarGroup>
        </div>
      </div>
      <div className="insights-left-panel">
        <div className="insights-panel-header">
          <h1>July 21, 2021 – July 28, 2021</h1>
        </div>
        <div className="insights-panel-content">
          <h3>Overview</h3>
          <div className="stats-panel-insights">
            <h2>20K Contributors</h2>
            <h2>200K Discussions</h2>
            <h2>500K Finds</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
