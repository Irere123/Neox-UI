import React, { useState } from 'react';
import { ThumbUp, ChatBubbleOutlined, CommentOutlined } from '@material-ui/icons';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Modal, Avatar } from '@material-ui/core';

import '../../styles/kofta/Post.css';
import CommentsModal from './CommentsModal';

function Post({ questions }) {
  const [open, setOpen] = useState(false);

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

              <Link to={`/question/${q.id}`}>
                <p style={{ color: '#fff', marginLeft: '3px' }}> Answer</p>
              </Link>
            </div>

            <div
              className='post__option'
              onClick={() => {
                setOpen(!open);
              }}
            >
              <CommentOutlined />
              <p>Comment</p>
            </div>
          </div>
          {open && (
            <Modal
              open={open}
              onClose={() => {
                setOpen(!open);
              }}
            >
              <CommentsModal
                onClose={() => {
                  setOpen(!open);
                }}
              />
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}

export default Post;
