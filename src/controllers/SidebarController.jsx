import React from "react";

import Channels from "../modules/viewteam/mainComponents/Channels";
import Teams from "../modules/viewteam/mainComponents/Teams";
import AddChannelModal from "../modules/viewteam/modals/AddChannelModal";
import InvitePeopleModal from "../modules/viewteam/modals/InvitePeopleModal";
import DirectMessageModal from "../modules/viewteam/modals/DirectMessageModal";

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
    const { teams, team, username, currentUserId } = this.props;

    const {
      openInvitePeopleModal,
      openAddChannelModal,
      openDirectMessageModal,
    } = this.state;

    const regularChannels = [];
    const dmChannels = [];

    team.channels.forEach((c) => {
      if (c.dm) {
        dmChannels.push(c);
      } else {
        regularChannels.push(c);
      }
    });

    return [
      <Teams key="team-sidebar" teams={teams} />,
      <Channels
        key="channels-sidebar"
        teamId={team.id}
        teamName={team.name}
        isOwner={team.admin}
        username={username}
        channels={regularChannels}
        dmChannels={dmChannels}
        onAddChannelClick={this.toggleAddChannelModal}
        onInvitePeopleClick={this.toggleInvitePeopleModal}
        onDirectMessageClick={this.toggleDirectMessageModal}
      />,
      <AddChannelModal
        currentUserId={currentUserId}
        teamId={team.id}
        onClose={this.toggleAddChannelModal}
        open={openAddChannelModal}
        key="sidebar-add-channel-modal"
      />,
      <InvitePeopleModal
        teamId={team.id}
        onClose={this.toggleInvitePeopleModal}
        open={openInvitePeopleModal}
        key="invite-people-modal"
      />,
      <DirectMessageModal
        currentUserId={currentUserId}
        teamId={team.id}
        onClose={this.toggleDirectMessageModal}
        open={openDirectMessageModal}
        key="sidebar-direct-message-modal"
      />,
    ];
  }
}
