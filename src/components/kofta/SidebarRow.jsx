import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kofta/SidebarRow.css';

function SidebarRow({ title }) {
  return (
    <div className='sidebarRow'>
      <Avatar>
        {title.charAt(0).toUpperCase()}
        {title.charAt(Math.floor(title.length / 3)).toUpperCase()}
      </Avatar>
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
