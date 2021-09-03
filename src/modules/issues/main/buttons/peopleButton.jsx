import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function peopleButton({ data: { loading, getDiscussion } }) {
  if (loading) {
    return <h3> People</h3>;
  }

  return <h3>{getDiscussion.people} People</h3>;
}

const getDiscussionQuery = gql`
  query ($discussionId: ID!) {
    getDiscussion(discussionId: $discussionId) {
      people
    }
  }
`;

export default graphql(getDiscussionQuery, {
  options: ({ discussionId }) => ({
    variables: {
      discussionId,
    },
  }),
})(peopleButton);
