import React from 'react';

import '../../styles/kofta/Feed.css';
import Post from './Post';

function Feed({ questions }) {
  return (
    <div className='feed'>
      <Post questions={questions} />
    </div>
  );
}

export default Feed;
