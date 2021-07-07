import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles/kousa/MessageContainer.css';

class MessageContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='messages'>
          <div className='message'>
            <Avatar>JD</Avatar>
            <div className='message__info'>
              <h4>
                John Doe
                <span className='message_timestamp'>7 hours ago</span>
              </h4>

              <p>This is a message for you</p>
            </div>
          </div>
          <div className='message'>
            <Avatar>IE</Avatar>
            <div className='message__info'>
              <h4>
                Irere
                <span className='message_timestamp'>8 hours ago</span>
              </h4>

              <p>This is a message for you</p>
            </div>
          </div>
        </div>

        <div className='bubble1'></div>
        <div className='bubble2'></div>
      </React.Fragment>
    );
  }
}

export default MessageContainer;
