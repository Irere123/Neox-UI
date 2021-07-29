import React from "react";
import moment from "moment";
import { Avatar } from "@material-ui/core";
import { compose, graphql } from "react-apollo";

import Loader from "../Loader";
import TrueButton from "./buttons/TrueButton";
import FalseButton from "./buttons/FalseButton";

function FindCard({ find, userId }) {
  return (
    <div className="discovery-card">
      <div className="discovery-card-header">
        <Avatar />
        <div className="user-details-card-header">
          <h2>{find.user.username}</h2>
          <h3>{moment(find.created_at).fromNow()}</h3>
        </div>
      </div>
      <div className="discovery-card-content">
        <p>{find.description}</p>
      </div>
      <div className="discovery-card-footer">
        <TrueButton findId={find.id} userId={userId} />
        <FalseButton findId={find.id} userId={userId} />
      </div>
    </div>
  );
}

export default FindCard;
