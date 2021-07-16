import React from 'react';
import { ThumbUp, ChatBubbleOutlined, Share } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

import '../../styles/kofta/Post.css';

function Post({ questions }) {
  return (
    <div>
      {questions.map((q) => (
        <div className='post'>
          <div className='post__top'>
            <Avatar className='post__avatar'>JD</Avatar>
            <div className='post__topinfo'>
              <h3>{q.user.username}</h3>
              <p>{q.created_at}</p>
            </div>
          </div>
          <div className='post__bottom'>
            <p>{q.text}</p>
          </div>
          <div className='post__options'>
            <div className='post__option'>
              <ThumbUp />
              <p>Like</p>
            </div>
            <div className='post__option'>
              <ChatBubbleOutlined />
              <p>Comment</p>
            </div>
            <div className='post__option'>
              <Share />
              <p>Share</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
