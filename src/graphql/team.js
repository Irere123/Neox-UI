import gql from 'graphql-tag';

export const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      admin
      channels {
        id
        name
      }
    }
  }
`;
