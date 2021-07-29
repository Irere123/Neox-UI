import React, { useState } from "react";
import { Avatar, Modal } from "@material-ui/core";
import { Check, Close } from "@material-ui/icons";

import "../../styles/kallen/Discussions.css";

function Discussions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="discussions-layout">
      <div className="discussions-header">
        <h2>Discussions</h2>
        <button type="button" onClick={() => setOpen(!open)}>
          New discussion
        </button>
      </div>
      <div className="discussion-card">
        <div className="discussion-card-header">
          <h2>
            OctoArcade Invader <span className="discussion-id">#1</span>
          </h2>
          <div className="discussion-card-status">
            <div className="status-button">
              <Check />
              <button>Open</button>
            </div>
            <div className="discussed-people">
              <h3>3 People</h3>
            </div>
            <h3>
              <span className="discussion-username">mariorod</span> opened this
              discussion 2 days ago
            </h3>
          </div>
          <div className="discussion-card-content">
            <Avatar />
            <div className="discussion-card-main-content">
              <div className="discussion-card-content-info">
                <h3>
                  <span className="discussion-username">mariorod</span>
                  discussed 2 days ago
                </h3>
              </div>
              <div className="discussion-card-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem numquam nulla aut vel sint assumenda rem, debitis
                  mollitia est vitae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discussion-card">
        <div className="discussion-card-header">
          <h2>
            Missing money <span className="discussion-id">#2</span>
          </h2>
          <div className="discussion-card-status">
            <div className="status-button-closed">
              <Close />
              <button>Closed</button>
            </div>
            <div className="discussed-people">
              <h3>15 People</h3>
            </div>
            <h3>
              <span className="discussion-username">irere123</span> opened this
              discussion 10 days ago
            </h3>
          </div>
          <div className="discussion-card-content">
            <Avatar />
            <div className="discussion-card-main-content">
              <div className="discussion-card-content-info">
                <h3>
                  <span className="discussion-username">irere123</span>
                  discussed 2 days ago
                </h3>
              </div>
              <div className="discussion-card-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem numquam nulla aut vel sint assumenda rem, debitis
                  mollitia est vitae?
                </p>
              </div>
            </div>
          </div>
          {open && (
            <Modal open={open} onClose={() => setOpen(!open)}>
              <h1>Hello world</h1>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discussions;
