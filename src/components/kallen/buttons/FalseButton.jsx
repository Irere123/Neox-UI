import React from "react";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

import { unlikesQuery } from "../../../graphql/issue";

function FalseButton({
  data: { loading, unlikeCount },
  findId,
  userId,
  mutate,
}) {
  if (loading) {
    return null;
  }

  return (
    <span
      onClick={async () => {
        await mutate({
          variables: { findId, userId },
        });
      }}
    >
      False {unlikeCount}
    </span>
  );
}

const unlikeFindMutation = gql`
  mutation ($findId: Int!, $userId: Int!) {
    unlikeFind(findId: $findId, userId: $userId) {
      ok
    }
  }
`;

export default compose(
  graphql(unlikesQuery, {
    options: ({ findId }) => ({
      variables: {
        findId,
      },
      fetchPolicy: "network-only",
    }),
  }),
  graphql(unlikeFindMutation)
)(FalseButton);
