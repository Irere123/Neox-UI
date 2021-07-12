import React from 'react';

import Channels from '../components/kousa/Channels';
import Teams from '../components/kousa/Teams';
import AddChannelModal from '../components/kousa/AddChannelModal';
import InvitePeopleModal from '../components/kousa/InvitePeopleModal';
import DirectMessageModal from '../components/kousa/DirectMessageModal';

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
    openDirectMessageModal: false,
  };

  toggleDirectMessageModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState((state) => ({
      openDirectMessageModal: !state.openDirectMessageModal,
    }));
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
    const { teams, team, username } = this.props;

    const { openInvitePeopleModal, openAddChannelModal, openDirectMessageModal } = this.state;

    return [
      <Teams key='team-sidebar' teams={teams} />,
      <Channels
        key='channels-sidebar'
        teamId={team.id}
        teamName={team.name}
        isOwner={team.admin}
        username={username}
        channels={team.channels}
        users={team.directMessageMembers}
        onAddChannelClick={this.toggleAddChannelModal}
        onInvitePeopleClick={this.toggleInvitePeopleModal}
        onDirectMessageClick={this.toggleDirectMessageModal}
      />,
      <AddChannelModal teamId={team.id} onClose={this.toggleAddChannelModal} open={openAddChannelModal} key='sidebar-add-channel-modal' />,
      <InvitePeopleModal teamId={team.id} onClose={this.toggleInvitePeopleModal} open={openInvitePeopleModal} key='invite-people-modal' />,
      <DirectMessageModal
        teamId={team.id}
        onClose={this.toggleDirectMessageModal}
        open={openDirectMessageModal}
        key='sidebar-direct-message-modal'
      />,
    ];
  }
}
