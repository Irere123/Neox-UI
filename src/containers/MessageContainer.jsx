import React from 'react';
import moment from 'moment';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Avatar } from '@material-ui/core';

import '../styles/kousa/MessageContainer.css';

class MessageContainer extends React.Component {
  render() {
    const {
      data: { loading, messages },
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <React.Fragment>
        <div className='messages'>
          {messages.map((m) => (
            <div className='message' key={`message-${m.id}`}>
              <Avatar>
                {m.user.username.charAt(0).toUpperCase()}
                {m.user.username.charAt(Math.floor(m.user.username.length / 3)).toUpperCase()}
              </Avatar>
              <div className='message__info'>
                <h4>
                  {m.user.username}
                  <span className='message_timestamp'>{moment(m.created_at).format('MMMM DD YYYY')}</span>
                </h4>

                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const messagesQuery = gql`
  query ($channelId: Int!) {
    messages(channelId: $channelId) {
      id
      text
      user {
        username
      }
      created_at
    }
  }
`;

export default graphql(messagesQuery, {
  options: (props) => ({
    variables: {
      channelId: props.channelId,
    },
    fetchPolicy: 'network-only',
  }),
})(MessageContainer);
