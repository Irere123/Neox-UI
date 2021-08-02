import React from "react";

import "../../styles/kousa/NothingFoundCard.css";

function NothingToFetchMessage({ message, title, icon, iconName }) {
  return (
    <div className="no_data_container">
      <div className="no_data_to_fetch_card">
        <div style={{ padding: "5px 10px" }}>
          <div className="no_data_card_header">
            <div className="no_data_header_info">
              {icon}
              <h2>{iconName}</h2>
            </div>
            <div className="close-icon">
              <div className="icon">{icon}</div>
            </div>
          </div>
          <div className="no_data_card_content">
            <h1>{title}</h1>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NothingToFetchMessage;
