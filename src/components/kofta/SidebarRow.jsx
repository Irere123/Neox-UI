import React from 'react';
import { Avatar } from '@material-ui/core';

import '../../styles/kofta/SidebarRow.css';

function SidebarRow({ title, src, Icon }) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
