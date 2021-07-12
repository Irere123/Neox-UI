import React from 'react';
import { Link } from 'react-router-dom';
import { AddCircle as Icon } from '@material-ui/icons';

import '../../styles/kousa/Channels.css';

const channel = ({ id, name }, teamId) => (
  <Link key={`channel-${id}`} to={`/view-team/${teamId}/${id}`}>
    <li className='sidebar_list_item'># {name}</li>
  </Link>
);

const user = ({ id, username }, teamId) => (
  <li key={`user-${id}`} className='sidebar_list_item'>
    <Link to={`/view-team/user/${teamId}/${id}`}>
      <span className='green'>●</span> {username}
    </Link>
  </li>
);

function Channels({ teamName, username, channels, users, onAddChannelClick, teamId, onInvitePeopleClick, isOwner, onDirectMessageClick }) {
  return (
    <div className='channel__wrapper'>
      <div className='push_left'>
        <h1 className='team_name_header'>{teamName}</h1>
        <h3 className='username'>{username}</h3>
      </div>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Channels
          {isOwner && <Icon onClick={onAddChannelClick} />}
        </li>
        {channels.map((c) => channel(c, teamId))}
      </ul>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Chats <Icon onClick={onDirectMessageClick} />
        </li>
        {users.map((u) => user(u, teamId))}
      </ul>
      {isOwner && (
        <Link to='#invitePeople'>
          <ul className='sidebar_list'>
            <li className='invite-link' onClick={onInvitePeopleClick}>
              + Invite People
            </li>
          </ul>
        </Link>
      )}
    </div>
  );
}

export default Channels;
