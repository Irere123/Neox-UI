import React, { useState } from "react";
import { Group } from "@material-ui/icons";
import { Modal, Fade, Avatar } from "@material-ui/core";
import Members from "./Members";

function Header({ channelName }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="titlebar__header">
        <div className="titlebar__header__content">
          <h2 style={{ fontFamily: "Inter", fontSize: "19px" }}>
            # {channelName}
          </h2>

          <div className="members-btn">
            <Avatar variant="rounded" onClick={() => setOpen(!open)}>
              <Group />
              <h4>20K</h4>
            </Avatar>
          </div>
        </div>
      </div>
      {open && (
        <Modal open={open} onClose={() => setOpen(!open)}>
          <Fade in={open}>
            <Members onClose={() => setOpen(!open)} />
          </Fade>
        </Modal>
      )}
    </>
  );
}

export default Header;
