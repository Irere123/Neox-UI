import React from "react";
import { graphql } from "react-apollo";
import Loader from "../components/Loader";

import { meQuery } from "../graphql/team";
import InvitesContainer from "../containers/InvitesContainer";

function Invites({ data: { loading, me } }) {
  if (loading) {
    return <Loader />;
  }

  const { id: currentUserId, username } = me;

  return (
    <div>
      <InvitesContainer userId={currentUserId} username={username} />
    </div>
  );
}

export default graphql(meQuery)(Invites);
