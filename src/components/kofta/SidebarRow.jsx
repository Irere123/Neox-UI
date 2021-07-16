import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kofta/SidebarRow.css';

function SidebarRow({ title, name }) {
  return (
    <div className='sidebarRow'>
      <Avatar>{name}</Avatar>
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
