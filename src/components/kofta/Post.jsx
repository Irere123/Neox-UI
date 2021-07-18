import React from 'react';
import { ThumbUp, ChatBubbleOutlined, Share } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import moment from 'moment';
import { Link } from 'react-router-dom';

import '../../styles/kofta/Post.css';

function Post({ questions }) {
  return (
    <div>
      {questions.map((q) => (
        <div className='post' key={q.id}>
          <div className='post__top'>
            <Avatar className='post__avatar'>
              {q.user.username.charAt(0).toUpperCase()}
              {q.user.username.charAt(Math.floor(q.user.username.length / 3)).toUpperCase()}
            </Avatar>
            <div className='post__topinfo'>
              <h3>{q.user.username}</h3>
              <p>{moment(q.created_at).fromNow()}</p>
            </div>
          </div>
          <div className='post__bottom'>
            <Link to={`/question/${q.id}`}>{q.text}</Link>
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
