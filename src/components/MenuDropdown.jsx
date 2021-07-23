import React from 'react';
import { Link } from 'react-router-dom';
import { MeetingRoom, Settings, Dashboard } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function MenuDropdown({ username }) {
  return (
    <React.Fragment>
      <Link to='#something' className='menu-item'>
        <div className='icon-left'>
          <Avatar />
        </div>
        <div className='menu-item-word'>
          <h3>{username}</h3>
        </div>
      </Link>
      <Link to='#something' className='menu-item'>
        <div className='icon-left'>
          <Dashboard />
        </div>
        <div className='menu-item-word'>
          <h3>Dashboard</h3>
        </div>
      </Link>
      <Link to='#something' className='menu-item'>
        <div className='icon-left'>
          <Settings />
        </div>
        <div className='menu-item-word'>
          <h3>Settings</h3>
        </div>
      </Link>
      <Link
        to='/'
        className='menu-item'
        onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
        }}
      >
        <div className='icon-left'>
          <MeetingRoom />
        </div>
        <div className='menu-item-word'>
          <h3>Log out</h3>
        </div>
      </Link>
    </React.Fragment>
  );
}

export default MenuDropdown;
