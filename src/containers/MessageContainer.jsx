import React from "react";
import dayjs from "dayjs";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Avatar, Button } from "@material-ui/core";

import "../styles/kousa/MessageContainer.css";
import Message from "../components/kousa/Message";

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

class MessageContainer extends React.Component {
  state = {
    hasMoreItems: true,
  };

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
          messages: [subscriptionData.data.newChannelMessage, ...prev.messages],
        };
      },
    });
  };

  render() {
    const {
      data: { loading, messages, fetchMore },
      channelId,
    } = this.props;

    if (loading) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="messages">
          {messages.map((m) => (
            <div className="message" key={`message-${m.id}`}>
              {m.text && (
                <Avatar>
                  {m.user.username.charAt(0).toUpperCase()}
                  {m.user.username
                    .charAt(Math.floor(m.user.username.length / 3))
                    .toUpperCase()}
                </Avatar>
              )}

              <div className="message__info">
                <h4>
                  {m.user.username}
                  <span className="message_timestamp">
                    {dayjs(m.created_at).format("MMM D HH:mm A")}
                  </span>
                </h4>

                <Message message={m} />
              </div>
            </div>
          ))}

          {this.state.hasMoreItems && messages.length >= 15 && (
            <div className="load_messages_container">
              <button
                className="load_messages_button"
                type="button"
                onClick={() => {
                  fetchMore({
                    variables: {
                      channelId,
                      cursor: messages[messages.length - 1].created_at,
                    },

                    updateQuery: (previousResult, { fetchMoreResult }) => {
                      if (!fetchMoreResult) {
                        return previousResult;
                      }

                      if (fetchMoreResult.messages.length < 15) {
                        this.setState({ hasMoreItems: false });
                      }

                      return {
                        ...previousResult,
                        messages: [
                          ...previousResult.messages,
                          ...fetchMoreResult.messages,
                        ],
                      };
                    },
                  });
                }}
              >
                Older Messages
              </button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const messagesQuery = gql`
  query ($cursor: String, $channelId: Int!) {
    messages(cursor: $cursor, channelId: $channelId) {
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
    fetchPolicy: "network-only",
  }),
})(MessageContainer);
