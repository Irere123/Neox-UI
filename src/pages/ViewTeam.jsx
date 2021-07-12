import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import findIndex from 'lodash/findIndex';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../containers/Sidebar';
import MessageContainer from '../containers/MessageContainer';
import SendMessage from '../components/kousa/SendMessage';
import HeaderBar from '../components/kousa/Header';
import { meQuery } from '../graphql/team';

function ViewTeam({
  mutate,
  data: { loading, me },
  match: {
    params: { teamId, channelId },
  },
}) {
  if (loading) {
    return null;
  }

  const { teams, username } = me;

  console.log(teams);

  if (!teams.length) {
    return <Redirect to='/create-team' />;
  }

  const teamIdInteger = parseInt(teamId, 10);
  const teamIdx = teamIdInteger ? findIndex(teams, ['id', teamIdInteger]) : 0;
  const team = teamIdx === -1 ? teams[0] : teams[teamIdx];

  const channelIdInteger = parseInt(channelId, 10);
  const channelIdx = channelIdInteger ? findIndex(team.channels, ['id', channelIdInteger]) : 0;
  const channel = channelIdx === -1 ? team.channels[0] : team.channels[channelIdx];

  return (
    <div>
      <Header />
      <div className='viewteam_layout'>
        <Sidebar
          teams={teams.map((t) => ({
            id: t.id,
            letter: t.name.charAt(0).toUpperCase(),
          }))}
          team={team}
          username={username}
        />
        {channel && <HeaderBar channelName={channel.name} />}
        {channel && <MessageContainer channelId={channel.id} channelName={channel.name} />}
        {channel && (
          <SendMessage
            channelId={channel.id}
            placeholder={channel.name}
            onSubmit={async (text) => {
              await mutate({ variables: { text, channelId: channel.id } });
            }}
          />
        )}
      </div>
    </div>
  );
}

const createMessageMutation = gql`
  mutation ($channelId: Int!, $text: String!) {
    createMessage(channelId: $channelId, text: $text)
  }
`;

export default compose(graphql(meQuery, { options: { fetchPolicy: 'network-only' } }), graphql(createMessageMutation))(ViewTeam);
