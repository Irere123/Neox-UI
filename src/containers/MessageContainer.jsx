import React from 'react';
import moment from 'moment';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Avatar } from '@material-ui/core';

import '../styles/kousa/MessageContainer.css';
import micIcon from '../images/mic.svg';
import FileUpload from '../components/FileUpload';
import RenderText from '../components/RenderText';

const newChannelMessageSubscription = gql`
  subscription ($channelId: Int!) {
    newChannelMessage(channelId: $channelId) {
      id
      text
      user {
        username
      }
      url
      filetype
      created_at
    }
  }
`;

const Message = ({ message: { url, text, filetype } }) => {
  if (url) {
    if (filetype.startsWith('image/')) {
      return <img src={url} alt='' />;
    } else if (filetype === 'text/plain') {
      return <RenderText url={url} />;
    } else if (filetype.startsWith('audio/')) {
      return (
        <audio controls>
          <source src={url} />
        </audio>
      );
    }
  }
  return <p>{text}</p>;
};

class MessageContainer extends React.Component {
  componentWillMount() {
    this.unsubscribe = this.subscribe(this.props.channelId);
  }

  componentWillReceiveProps({ channelId }) {
    if (this.props.channelId !== channelId) {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.unsubscribe = this.subscribe(channelId);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  subscribe = (channelId) => {
    return this.props.data.subscribeToMore({
      document: newChannelMessageSubscription,
      variables: {
        channelId: channelId,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) {
          return prev;
        }

        return {
          ...prev,
          messages: [...prev.messages, subscriptionData.data.newChannelMessage],
        };
      },
    });
  };

  render() {
    const {
      channelName,
      data: { loading, messages },
      channelId,
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <React.Fragment>
        <div className='messages'>
          {messages.length ? (
            <FileUpload disableClick channelId={channelId}>
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

                    <Message message={m} />
                  </div>
                </div>
              ))}
            </FileUpload>
          ) : (
            <div className='card-message'>
              <div className='card-message-main'>
                <img src={micIcon} alt='Mic Icon' />
                <div className='card-description'>
                  <h3>
                    You’re looking at the <span>{`#${channelName}`}</span> channel
                  </h3>
                  <h4>This is the one channel that will always include team members. It’s a great spot for team-wide conversations.</h4>
                </div>
              </div>
            </div>
          )}
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
      url
      filetype
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
