import React from 'react';
import {
  MessageOutlined as MessageIcon,
  AttachmentOutlined as AttachmentIcon,
  SentimentSatisfiedOutlined as EmojiIcon,
} from '@material-ui/icons';

import '../../styles/kousa/SendMessage.css';

function SendMessage() {
  return (
    <div className='send_message_wrapper'>
      <div className='message__input'>
        <MessageIcon className='message__inputIcon' />
        <input placeholder='Message #general' />
        <AttachmentIcon />
        <EmojiIcon />
      </div>
    </div>
  );
}

export default SendMessage;
