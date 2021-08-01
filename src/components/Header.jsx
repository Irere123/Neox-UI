import React, { useState } from "react";
import "../styles/Header.css";
import { IconButton, Badge, ClickAwayListener } from "@material-ui/core";
import {
  ExpandMore,
  Explore,
  ForumOutlined,
  ExpandLess,
} from "@material-ui/icons";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";
import MenuDropdown from "./MenuDropdown";

function Header({ username }) {
  const [open, setOpen] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="logo__header">
        <img src={logo} alt="Neox" />
        <h3>
          NEOX <span className="neox-version">V.0.1 Alpha</span>
        </h3>
      </div>
      <div className="header__right">
        <Link to="/home">
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>
        <Link to="/view-team">
          <IconButton>
            <ForumOutlined />
          </IconButton>
        </Link>
        <IconButton>
          <Explore />
        </IconButton>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? (
            <ExpandLess onClick={() => setOpen(!open)} />
          ) : (
            <ExpandMore onClick={() => setOpen(!open)} />
          )}
        </IconButton>
        {open && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="dropdown" onBlur={() => setOpen(!open)}>
              <MenuDropdown username={username} />
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}

export default Header;
