import React from "react";
import {
  PeopleOutlined,
  Healing,
  ForumOutlined,
  Assignment,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import "../../styles/Home.css";

function Sidebar() {
  return (
    <div>
      <div className="usercard__Mainpage">
        <div className="usercard__Mainpage__avatar">
          <h2>HJ</h2>
        </div>
        <div className="usercard__Mainpage__info">
          <h2>Henry Jack</h2>
        </div>
      </div>
      <div className="sidebarLink__MainPage">
        <PeopleOutlined />
        <div>
          <h2>Friends</h2>
        </div>
      </div>

      <div className="sidebarLink__MainPage">
        <Healing />
        <div>
          <Link to="/class">
            <h2>Class</h2>
          </Link>
        </div>
      </div>

      <div className="sidebarLink__MainPage">
        <ForumOutlined />
        <div>
          <h2>Teams</h2>
        </div>
      </div>

      <div className="sidebarLink__MainPage">
        <Assignment />
        <div>
          <h2>Works</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
