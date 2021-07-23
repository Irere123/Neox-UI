import gql from 'graphql-tag';

export const meQuery = gql`
  {
    me {
      id
      username
      teams {
        id
        name
        admin
        directMessageMembers {
          id
          username
        }
        channels {
          id
          name
          dm
        }
      }
    }
  }
`;

export const getTeamMembersQuery = gql`
  query ($teamId: Int!) {
    getTeamMembers(teamId: $teamId) {
      id
      username
    }
  }
`;

export const allQuestionsQuery = gql`
  {
    allQuestions {
      id
      text
      user {
        username
        email
        id
      }
      created_at
    }
  }
`;
