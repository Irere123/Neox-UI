import React, { useState } from 'react';
import '../styles/Header.css';
import { IconButton, Badge } from '@material-ui/core';
import { ExpandMore, Notifications, ForumOutlined, ExpandLess } from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import MenuDropdown from './MenuDropdown';

function Header({ username }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='logo__header'>
        <img src={logo} alt='Argon' />
      </div>
      <div className='header__right'>
        <IconButton>
          <Link to='/home'>
            <HomeOutlinedIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link to='/view-team'>
            <ForumOutlined />
          </Link>
        </IconButton>
        <IconButton>
          <Badge badgeContent={12} color='primary'>
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <ExpandLess onClick={() => setOpen(!open)} /> : <ExpandMore onClick={() => setOpen(!open)} />}
        </IconButton>
        {open && (
          <div className='dropdown'>
            <MenuDropdown username={username} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
