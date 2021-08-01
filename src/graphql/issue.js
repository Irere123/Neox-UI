import gql from "graphql-tag";

export const allIssuesQuery = gql`
  query ($teamIds: [Int!]!) {
    allIssues(teamIds: $teamIds) {
      id
      description
      category
      team {
        id
        name
      }
      user {
        username
      }
      created_at
    }
  }
`;

export const allFindsQuery = gql`
  query ($issueId: ID!) {
    allFinds(issueId: $issueId) {
      id
      description
      user {
        username
      }
      created_at
    }
  }
`;

export const createIssueMutation = gql`
  mutation (
    $teamId: Int!
    $userId: Int!
    $description: String!
    $category: String!
  ) {
    createIssue(
      category: $category
      description: $description
      userId: $userId
      teamId: $teamId
    ) {
      ok
      issue {
        id
        description
        category
        team {
          id
          name
        }
        user {
          username
        }
        created_at
      }
    }
  }
`;

export const allDiscussionsQuery = gql`
  query ($issueId: ID!) {
    allDiscussions(issueId: $issueId) {
      id
      name
      discussion
      created_at
      user {
        username
      }
    }
  }
`;

export const allRepliesQuery = gql`
  query ($discussionId: ID!) {
    allReplies(discussionId: $discussionId) {
      id
      reply
      created_at
      user {
        username
      }
    }
  }
`;
