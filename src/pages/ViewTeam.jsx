import React from 'react';
import { graphql } from 'react-apollo';
import findIndex from 'lodash/findIndex';

import Header from '../components/Header';
import Sidebar from '../containers/Sidebar';
import MessageContainer from '../containers/MessageContainer';
import SendMessage from '../components/kousa/SendMessage';
import HeaderBar from '../components/kousa/Header';
import { allTeamsQuery } from '../graphql/team';

function ViewTeam({
  data: { loading, allTeams },
  match: {
    params: { teamId, channelId },
  },
}) {
  if (loading) {
    return null;
  }

  const teamIdx = teamId ? findIndex(allTeams, ['id', parseInt(teamId, 10)]) : 0;
  const team = allTeams[teamIdx];

  const channelIdx = channelId ? findIndex(team.channels, ['id', parseInt(channelId, 10)]) : 0;
  const channel = team.channels[channelIdx];

  return (
    <div>
      <Header />
      <div className='viewteam_layout'>
        <Sidebar
          teams={allTeams.map((t) => ({
            id: t.id,
            letter: t.name.charAt(0).toUpperCase(),
          }))}
          team={team}
        />
        <HeaderBar channelName={channel.name} />
        <MessageContainer channelId={channel.id} />
        <SendMessage channelName={channel.name} />
      </div>
    </div>
  );
}

export default graphql(allTeamsQuery)(ViewTeam);
