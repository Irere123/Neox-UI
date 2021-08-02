import React, { useState } from "react";
import "../styles/Header.css";
import { IconButton, ClickAwayListener, Modal } from "@material-ui/core";
import {
  ExpandMore,
  Explore,
  ForumOutlined,
  ExpandLess,
} from "@material-ui/icons";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";

import MenuDropdown from "./MenuDropdown";
import CommingSoon from "./CommingSoon";

function Header({ username }) {
  const [open, setOpen] = useState(false);
  const [openSoon, setOpenSoon] = useState(false);

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickAwaySoon = () => {
    setOpenSoon(false);
  };

  return (
    <div className="header">
      <div className="logo__header">
        <h3>
          NEOX <span className="neox-version">V.0.1 Beta</span>
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
        <IconButton onClick={() => setOpenSoon(!openSoon)}>
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
            <div className="dropdown">
              <MenuDropdown username={username} />
            </div>
          </ClickAwayListener>
        )}
        {openSoon && (
          <ClickAwayListener onClickAway={handleClickAwaySoon}>
            <Modal open={openSoon} onClose={() => setOpenSoon(!openSoon)}>
              <div className="comming_soon_container">
                <div className="comming__soon">
                  <CommingSoon onClose={() => setOpenSoon(!openSoon)} />
                </div>
              </div>
            </Modal>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
}

export default Header;
