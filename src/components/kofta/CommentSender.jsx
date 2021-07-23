import React from 'react';
import {
  ForumTwoTone as CommentIcon,
  AttachmentOutlined as AttachmentIcon,
  SentimentSatisfiedOutlined as EmojiIcon,
} from '@material-ui/icons';

const CommentSender = () => {
  return (
    <div style={{ marginTop: '40px' }} className='search'>
      <div className='search__input'>
        <CommentIcon className='comment__inputIcon' />
        <input placeholder='Write your comment' />
        <EmojiIcon />
      </div>
    </div>
  );
};

export default CommentSender;
