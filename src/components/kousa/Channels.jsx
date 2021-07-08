import React from 'react';
import { Add as Icon } from '@material-ui/icons';
import '../../styles/kousa/Channels.css';

function Channels() {
  return (
    <div className='channel__wrapper'>
      <div className='push_left'>
        <h1 className='team_name_header'>Business Team</h1>
        <h3 className='username'>John Doe</h3>
      </div>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Channels <Icon />
        </li>
        <li className='sidebar_list_item'># general</li>
        <li className='sidebar_list_item'># random</li>
      </ul>
      <ul className='sidebar_list'>
        <li className='sidebar_list_header'>
          Chats <Icon />
        </li>
        <li className='sidebar_list_item'>
          <span className='green'>●</span> Kenny
        </li>
        <li className='sidebar_list_item'>
          <span className='green'>●</span> Jordan
        </li>
      </ul>
      <ul className='sidebar_list'>
        <li className='invite-link'>+ Invite People</li>
      </ul>
    </div>
  );
}

export default Channels;
