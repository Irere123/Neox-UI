import React from "react";
import { Close } from "@material-ui/icons";

function Members({ onClose }) {
  return (
    <div className="publishModal">
      <div className="publishModal_content">
        <div className="publishModal__header">
          <div className="close-icon" onClick={onClose}>
            <Close />
          </div>
          <h4>Team Members</h4>
        </div>
        <div className="publishModal__center">
          <label>Your Find</label>
          <textarea name="description" cols="30" rows="6"></textarea>
        </div>
        <div className="publishModal__btn">
          <button type="submit">Publish</button>
        </div>
      </div>
    </div>
  );
}

export default Members;
