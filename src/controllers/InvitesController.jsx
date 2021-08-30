import React from "react";
import { graphql } from "react-apollo";
import dayjs from "dayjs";
import { Avatar } from "@material-ui/core";
import AcceptButton from "../modules/viewteam/inviteComponents/AcceptButton";
import DeclineButton from "../modules/viewteam/inviteComponents/DeclineButton";

import { getInvitesQuery } from "../graphql/request";

function InvitesContainer({
  userId,
  username,
  data: { loading, getInvites: invites },
}) {
  if (loading) {
    return null;
  }

  if (!invites.length) {
    return (
      <div>
        <h1 style={{ color: "#fff" }}>Hello, {username}</h1>
        <h1 style={{ color: "#fff" }}>You don't have nay requests</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: "#fff" }}>Hello, {username}</h1>
      <h2 style={{ color: "#fff" }}>These are your invites</h2>
      {invites.map((invite) => (
        <div style={{ color: "#fff", marginTop: "50px", display: "flex" }}>
          <Avatar>
            {invite.user.username.charAt(0).toUpperCase()}
            {invite.user.username
              .charAt(Math.floor(invite.user.username.length / 3))
              .toUpperCase()}
          </Avatar>
          <div style={{ marginLeft: "10px" }}>
            <h3>
              {invite.user.username} Invited you to join {invite.team.name} team
            </h3>
            <h4>{dayjs(invite.created_at).fromNow()}</h4>
            <div style={{ display: "flex" }}>
              <span>
                <AcceptButton />
              </span>
              <span>
                <DeclineButton receiverId={userId} requestId={invite.id} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default graphql(getInvitesQuery, {
  options: (props) => ({
    variables: {
      receiverId: props.userId,
    },
  }),
})(InvitesContainer);
