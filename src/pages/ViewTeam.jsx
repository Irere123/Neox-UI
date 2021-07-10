import React from 'react';
import { graphql } from 'react-apollo';
import findIndex from 'lodash/findIndex';
import { Redirect } from 'react-router-dom';

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

  if (!allTeams.length) {
    return <Redirect to='/create-team' />;
  }

  const teamIdInteger = parseInt(teamId, 10);
  const teamIdx = teamIdInteger ? findIndex(allTeams, ['id', teamIdInteger]) : 0;
  const team = teamIdx === -1 ? allTeams[0] : allTeams[teamIdx];

  const channelIdInteger = parseInt(channelId, 10);
  const channelIdx = channelIdInteger ? findIndex(team.channels, ['id', channelIdInteger]) : 0;
  const channel = channelIdx === -1 ? team.channels[0] : team.channels[channelIdx];

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
        {channel && <HeaderBar channelName={channel.name} />}
        {channel && <MessageContainer channelId={channel.id} />}
        {channel && <SendMessage channelName={channel.name} />}
      </div>
    </div>
  );
}

export default graphql(allTeamsQuery)(ViewTeam);
