import React from "react";
import { Close, Explore } from "@material-ui/icons";

function CommingSoon({ onClose }) {
  return (
    <div style={{ padding: "5px 10px" }}>
      <div className="comming_soon_card_header">
        <div className="explore-feature">
          <Explore />
          <h2>Explore</h2>
        </div>
        <div className="close-icon">
          <div className="icon" onClick={onClose}>
            <Close />
          </div>
        </div>
      </div>
      <div className="comming_soon_card_content">
        <h1>Comming Soon</h1>
        <p>
          Sorry Neox is still in Beta version so this feature is still in
          construction
        </p>
      </div>
    </div>
  );
}

export default CommingSoon;
