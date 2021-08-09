import gql from "graphql-tag";

export const getInvitesQuery = gql`
  query ($receiverId: Int!) {
    getInvites(receiverId: $receiverId) {
      id
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
