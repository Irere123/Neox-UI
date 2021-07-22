import React from 'react';
import { Avatar } from '@material-ui/core';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';

import '../../styles/kallen/Discussions.css';

function Discussions() {
  return (
    <div className='discussions-layout'>
      <div className='discussions-header'>
        <h2>Discussions</h2>
        <button>Start</button>
      </div>
      <div className='discussion-card'>
        <Avatar />
        <div className='discussion-card-content'>
          <div className='discussion-card-header'>
            <h2>Jenny Carly</h2>
            <h4>a few seconds ago</h4>
          </div>
          <div className='discussion-card-center'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima unde distinctio numquam accusamus odit esse, omnis quidem
              deleniti veniam.
            </p>
          </div>
          <div className='discussion-card-footer'></div>
        </div>
      </div>
      <div className='discussion-card-reply'>
        <div className='discussion-card-header'>
          <h2>John Kelly</h2>
          <h4>a few seconds ago</h4>
        </div>
        <div className='discussion-card-reply-center'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minima unde distinctio numquam accusamus odit esse, omnis quidem
            deleniti veniam.
          </p>
        </div>
        <div className='discussion-card-footer'></div>
      </div>
    </div>
  );
}

export default Discussions;
