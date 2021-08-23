import React from "react";
import { Close } from "@material-ui/icons";

import "../../../styles/kousa/SettingsModal.css";
import DeleteButton from "../DeleteButton";
import LeaveTeamButton from "../LeaveTeamButton";

function SettingsModal({ onClose, teamName, teamId, isAdmin }) {
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
            You're looking at {teamName.slice(1, 13)} team. Here you can manage
            the settings of {teamName.slice(1, 13)} team.
          </p>
          {isAdmin ? (
            <DeleteButton teamId={teamId} onClose={onClose} />
          ) : (
            <LeaveTeamButton teamId={teamId} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
