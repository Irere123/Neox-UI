import React from "react";
import dayjs from "dayjs";
import { Avatar } from "@material-ui/core";

function FindCard({ find }) {
  return (
    <div className="discovery-card">
      <div className="discovery-card-header">
        <Avatar>
          {find.user.username.charAt(0).toUpperCase()}
          {find.user.username
            .charAt(Math.floor(find.user.username.length / 3))
            .toUpperCase()}
        </Avatar>
        <div className="user-details-card-header">
          <h2>{find.user.username}</h2>
          <h3>{dayjs(find.created_at).fromNow()}</h3>
        </div>
      </div>
      <div className="discovery-card-content">
        <p>{find.description}</p>
      </div>
    </div>
  );
}

export default FindCard;
