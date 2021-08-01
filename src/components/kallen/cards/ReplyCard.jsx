import React from "react";
import { Avatar, Paper } from "@material-ui/core";
import { graphql } from "react-apollo";
import dayjs from "dayjs";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import InputReply from "./InputReply";
import { allRepliesQuery } from "../../../graphql/issue";

function ReplyCard({ data: { loading, allReplies }, discussionId, userId }) {
  if (loading) {
    return null;
  }

  return (
    <div className="reply-section">
      <InputReply discussionId={discussionId} userId={userId} />
      <Timeline>
        {allReplies.map((reply) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary">
                <Avatar>
                  {reply.user.username.charAt(0).toUpperCase()}
                  {reply.user.username
                    .charAt(Math.floor(reply.user.username.length / 3))
                    .toUpperCase()}
                </Avatar>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3}>
                <div className="discussion-card-content">
                  <div className="discussion-card-main-content">
                    <div className="discussion-card-content-info">
                      <h3>
                        <span className="discussion-username">
                          {reply.user.username}
                        </span>
                        replied {dayjs(reply.created_at).fromNow()}
                      </h3>
                    </div>
                    <div className="discussion-card-center">
                      <p>{reply.reply}</p>
                    </div>
                  </div>
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default graphql(allRepliesQuery, {
  options: (props) => ({
    variables: {
      discussionId: props.discussionId,
    },
    fetchPolicy: "network-only",
  }),
})(ReplyCard);
