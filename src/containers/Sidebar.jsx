import React from 'react';
import decode from 'jwt-decode';

import Channels from '../components/kousa/Channels';
import Teams from '../components/kousa/Teams';
import AddChannelModal from '../components/kousa/AddChannelModal';
import InvitePeopleModal from '../components/kousa/InvitePeopleModal';

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
  };

  toggleAddChannelModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState((state) => ({
      openAddChannelModal: !state.openAddChannelModal,
    }));
  };

  toggleInvitePeopleModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState((state) => ({
      openInvitePeopleModal: !state.openInvitePeopleModal,
    }));
  };

  render() {
    const { teams, team } = this.props;

    const { openInvitePeopleModal, openAddChannelModal } = this.state;

    let username = '';

    try {
      const token = localStorage.getItem('token');

      const { user } = decode(token);
      username = user.username;
    } catch (err) {
      console.log(err);
    }

    return [
      <Teams key='team-sidebar' teams={teams} />,
      <Channels
        key='channels-sidebar'
        teamId={team.id}
        teamName={team.name}
        isOwner={team.admin}
        username={username}
        channels={team.channels}
        users={[
          { id: 1, name: 'slackbot' },
          { id: 2, name: 'user1' },
        ]}
        onAddChannelClick={this.toggleAddChannelModal}
        onInvitePeopleClick={this.toggleInvitePeopleModal}
      />,
      <AddChannelModal teamId={team.id} onClose={this.toggleAddChannelModal} open={openAddChannelModal} key='sidebar-add-channel-modal' />,
      <InvitePeopleModal teamId={team.id} onClose={this.toggleInvitePeopleModal} open={openInvitePeopleModal} key='invite-people-modal' />,
    ];
  }
}
