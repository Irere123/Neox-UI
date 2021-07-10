import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import findIndex from 'lodash/findIndex';
import decode from 'jwt-decode';

import Channels from '../components/kousa/Channels';
import Teams from '../components/kousa/Teams';
import _ from 'lodash';

class Sidebar extends React.Component {
  render() {
    const {
      data: { loading, allTeams },
      currentTeamId,
    } = this.props;

    if (loading) {
      return null;
    }

    console.log(allTeams);

    const teamIdx = _.findIndex(allTeams, ['id', currentTeamId]);
    const team = allTeams[teamIdx];

    let username = '';

    try {
      const token = localStorage.getItem('token');

      const { user } = decode(token);
      username = user.username;
      console.log(username);
    } catch (err) {
      console.log(err);
    }

    console.log(team.channels);

    return [
      <Teams
        key='team-sidebar'
        teams={allTeams.map((t) => ({
          id: t.id,
          letter: t.name.charAt(0).toUpperCase(),
        }))}
      />,
      <Channels
        key='channels-sidebar'
        teamName={team.name}
        username={username}
        channels={team.channels}
        users={[
          { id: 1, name: 'slackbot' },
          { id: 2, name: 'user1' },
        ]}
      />,
    ];
  }
}

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      channels {
        id
        name
      }
    }
  }
`;

export default graphql(allTeamsQuery)(Sidebar);
