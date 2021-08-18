import React from "react";
import { Close } from "@material-ui/icons";

import "../../../styles/kousa/SettingsModal.css";
import DeleteButton from "../DeleteButton";

function SettingsModal({ onClose, teamName, creator, teamId }) {
  return (
    <div className="SettingsModal">
      <div className="SettingsModal__header">
        <div className="close-icon" onClick={onClose}>
          <div className="icon">
            <Close />
          </div>
        </div>
      </div>
      <div className="SettingsModal__content">
        <div className="Settings">
          <h2>Settings</h2>
          <p>
            {teamName} was created by {creator} by now it has 230 people
          </p>
          <DeleteButton teamId={teamId} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
