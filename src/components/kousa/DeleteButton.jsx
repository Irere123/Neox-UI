import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { meQuery } from "../../graphql/team";

function DeleteButton({ teamId, mutate, onClose }) {
  return (
    <button
      onClick={async () => {
        await mutate({
          variables: { teamId },
          refetchQueries: [{ query: meQuery }],
        });
        onClose();
      }}
      className="deleteButton"
    >
      Delete Team
    </button>
  );
}

const deleteTeamMutation = gql`
  mutation ($teamId: Int!) {
    deleteTeam(teamId: $teamId)
  }
`;

export default graphql(deleteTeamMutation)(DeleteButton);
