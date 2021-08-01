import React from "react";
import dayjs from "dayjs";

import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Avatar } from "@material-ui/core";

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
      channelName,
      data: { loading, messages },
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
                    {dayjs(m.created_at).format("MMMM DD YYYY HH:mm A")}
                  </span>
                </h4>

                <Message message={m} />
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
