import React, { useState } from 'react';
import '../styles/Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import { ExpandMore, Notifications, ForumOutlined, ExpandLess } from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import profilepic from '../images/Pixel.jpg';
import MenuDropdown from './MenuDropdown';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='logo__header'>
        <img src={logo} alt='Argon' />
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar className='header__avatar' src={profilepic} />
          <h4>Tim</h4>
        </div>

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
          <Notifications />
        </IconButton>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <ExpandLess onClick={() => setOpen(!open)} /> : <ExpandMore onClick={() => setOpen(!open)} />}
        </IconButton>
        {open && (
          <div className='dropdown'>
            <MenuDropdown />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
