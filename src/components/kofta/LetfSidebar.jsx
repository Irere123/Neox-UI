import React from 'react';
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className='trends'>
      <Link to='/profile'>
        <SidebarRow title='Tim Barners Lee' name='TL' />
      </Link>
      <h3>People</h3>
      <SidebarRow title='Ben Awad' name='BA' />
      <SidebarRow title='Denis Ivy' name='DI' />
      <SidebarRow title='Neox Bot' name='NB' />
      <SidebarRow title='Brad Traversy' name='BT' />
      <SidebarRow title='Irere Emmanuel' name='IE' />
    </div>
  );
};

export default LeftSidebar;
