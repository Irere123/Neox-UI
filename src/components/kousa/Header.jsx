import React from 'react';

function Header({ channelName }) {
  return (
    <div className='titlebar__header'>
      <h2># {channelName}</h2>
    </div>
  );
}

export default Header;
