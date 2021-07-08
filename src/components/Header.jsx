import React, { useState } from 'react';
import '../styles/Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import { ExpandMore, Notifications, ForumOutlined } from '@material-ui/icons';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import profilepic from '../images/Pixel.jpg';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt='Argon' />
      </div>
      <div className='header__right'>
        <div className='header__info'>
          <Avatar className='header__avatar' src={profilepic} />
          <h4>Tim</h4>
        </div>

        <IconButton>
          <Link to='/'>
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
        <IconButton>
          <ExpandMore onClick={() => setOpen(!open)} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
