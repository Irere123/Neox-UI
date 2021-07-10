import React from 'react';
import { Add as Icon } from '@material-ui/icons';
import '../../styles/kousa/Channels.css';

const channel = ({ id, name }) => (
  <li key={`channel-${id}`} className='sidebar_list_item'>
    # {name}
  </li>
);

const user = ({ id, name }) => (
  <li key={`user-${id}`} className='sidebar_list_item'>
    <span className='green'>●</span> {name}
  </li>
);

function Channels({ teamName, username, channels, users }) {
  return (
    <div className='channel__wrapper'>
      <div className='push_left'>
        <h1 className='team_name_header'>{teamName}</h1>
        <h3 className='username'>{username}</h3>
      </div>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Channels <Icon />
        </li>
        {channels.map(channel)}
      </ul>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Chats <Icon />
        </li>
        {users.map(user)}
      </ul>
      <ul className='sidebar_list'>
        <li className='invite-link'>+ Invite People</li>
      </ul>
    </div>
  );
}

export default Channels;
