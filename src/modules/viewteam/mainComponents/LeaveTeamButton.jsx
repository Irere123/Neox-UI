import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { meQuery } from "../../../graphql/team";

function LeaveTeamButton({ teamId, mutate, onClose }) {
  return (
    <button
      className="leaveTeam__button"
      onClick={async () => {
        await mutate({
          variables: { teamId },
          refetchQueries: [{ query: meQuery }],
        });
        onClose();
      }}
    >
      Leave team
    </button>
  );
}

const LeaveTeamMutation = gql`
  mutation ($teamId: Int!) {
    leaveTeam(teamId: $teamId)
  }
`;

export default graphql(LeaveTeamMutation)(LeaveTeamButton);
