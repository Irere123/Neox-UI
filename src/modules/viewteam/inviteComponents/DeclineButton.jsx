import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { getInvitesQuery } from "../../../graphql/request";

function DeclineButton({ mutate, requestId, receiverId }) {
  return (
    <div
      onClick={async () => {
        await mutate({
          variables: { requestId },
          refetchQueries: [
            { query: getInvitesQuery, variables: { receiverId } },
          ],
        });
      }}
    >
      <button>Decline</button>
    </div>
  );
}

const declineRequestMutation = gql`
  mutation ($requestId: Int!) {
    declineRequest(requestId: $requestId)
  }
`;

export default graphql(declineRequestMutation)(DeclineButton);
