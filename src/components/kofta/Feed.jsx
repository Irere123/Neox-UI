import React from 'react';

import '../../styles/kofta/Feed.css';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <Post
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg'
        message='William Henry Gates III (born October 28, 1955) is an American business magnate, software developer, and philanthropist'
        timestamp='2 days ago'
        username='Tim Lee'
      />
      <Post
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/220px-Sir_Tim_Berners-Lee_%28cropped%29.jpg'
        message='Learn to code with code.org'
        timestamp='3 hours ago'
        username='Tim Lee'
      />
      <Post
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tim_Cook_%282017%2C_cropped%29.jpg/220px-Tim_Cook_%282017%2C_cropped%29.jpg'
        message='Yooo how are you every one today we are releasing Apple Grasses'
        timestamp='9 hours ago'
        username='Tim Cook'
      />
    </div>
  );
}

export default Feed;
