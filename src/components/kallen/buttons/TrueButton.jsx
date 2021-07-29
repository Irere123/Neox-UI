import React from "react";
import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";

import { likesQuery } from "../../../graphql/issue";

function TrueButton({ data: { loading, likeCount }, mutate, findId, userId }) {
  if (loading) {
    return null;
  }

  return (
    <span
      onClick={async () => {
        await mutate({
          variables: { findId, userId },
          update: (store, { data: { likeFind } }) => {
            const { like } = likeFind;

            const data = store.readQuery({
              query: likesQuery,
              variables: { findId },
            });
            data += like;
            store.writeQuery({
              query: likesQuery,
              variables: { findId },
              data,
            });
          },
        });
      }}
    >
      True {likeCount}
    </span>
  );
}

const likeFindMutation = gql`
  mutation ($findId: Int!, $userId: Int!) {
    likeFind(findId: $findId, userId: $userId) {
      ok
      like {
        user {
          id
        }

        find {
          id
        }
      }
    }
  }
`;

export default compose(
  graphql(likesQuery, {
    options: ({ findId }) => ({
      variables: {
        findId,
      },
      fetchPolicy: "network-only",
    }),
  }),
  graphql(likeFindMutation)
)(TrueButton);
