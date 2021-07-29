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
  query ($issueId: Int!) {
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

export const likesQuery = gql`
  query ($findId: Int!) {
    likeCount(findId: $findId)
  }
`;

export const unlikesQuery = gql`
  query ($findId: Int!) {
    unlikeCount(findId: $findId)
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
