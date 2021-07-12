import React from 'react';
import moment from 'moment';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Avatar } from '@material-ui/core';

import '../styles/kousa/MessageContainer.css';

const newDirectMessageSubscription = gql`
  subscription ($teamId: Int!, $userId: Int!) {
    newDirectMessage(teamId: $teamId, userId: $userId) {
      id
      sender {
        username
      }
      text
      created_at
    }
  }
`;

const directMessagesQuery = gql`
  query ($teamId: Int!, $userId: Int!) {
    directMessages(teamId: $teamId, otherUserId: $userId) {
      id
      sender {
        username
      }
      text
      created_at
    }
  }
`;

class DMContainer extends React.Component {
  componentWillMount() {
    this.unsubscribe = this.subscribe(this.props.teamId, this.props.userId);
  }

  componentWillReceiveProps({ teamId, userId }) {
    if (this.props.teamId !== teamId || this.props.userId !== userId) {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.unsubscribe = this.subscribe(teamId, userId);
    }
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  subscribe = (teamId, userId) =>
    this.props.data.subscribeToMore({
      document: newDirectMessageSubscription,
      variables: {
        teamId,
        userId,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) {
          return prev;
        }

        return {
          ...prev,
          directMessages: [...prev.directMessages, subscriptionData.newDirectMessage],
        };
      },
    });

  render() {
    const {
      data: { loading, directMessages },
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <React.Fragment>
        <div className='messages'>
          {directMessages.map((m) => (
            <div className='message' key={`direct-message-${m.id}`}>
              <Avatar>
                {m.sender.username.charAt(0).toUpperCase()}
                {m.sender.username.charAt(Math.floor(m.sender.username.length / 3)).toUpperCase()}
              </Avatar>
              <div className='message__info'>
                <h4>
                  {m.sender.username}
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

export default graphql(directMessagesQuery, {
  options: (props) => ({
    fetchPolicy: 'network-only',
    variables: {
      teamId: props.teamId,
      userId: props.userId,
    },
  }),
})(DMContainer);
