import React from "react";
import { Check, ExpandMore, Comment } from "@material-ui/icons";
import {
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import dayjs from "dayjs";

import ReplyCard from "./ReplyCard";
import PeopleButton from "../buttons/peopleButton";

function DiscussionCard({ discussion, userId }) {
  return (
    <div className="discussion-card">
      <div className="discussion-card-header">
        <h2>
          {discussion.name}
          <span className="discussion-id"> #{discussion.id}</span>
        </h2>
        <div className="discussion-card-status">
          <div className="status-button">
            <Check />
            <button>Open</button>
          </div>
          <div className="discussed-people">
            <PeopleButton discussionId={discussion.id} />
          </div>
          <h3>
            <span className="discussion-username">
              {discussion.user.username}
            </span>
            opened this discussion {dayjs(discussion.created_at).fromNow()}
          </h3>
        </div>
        <div className="discussion-card-content">
          <Avatar>
            {discussion.user.username.charAt(0).toUpperCase()}
            {discussion.user.username
              .charAt(Math.floor(discussion.user.username.length / 3))
              .toUpperCase()}
          </Avatar>
          <div className="discussion-card-main-content">
            <div className="discussion-card-content-info">
              <h3>
                <span className="discussion-username">
                  {discussion.user.username}
                </span>
                <span className="discussed__high">
                  discussed {dayjs(discussion.created_at).fromNow()}
                </span>
                <span className="discussed__low">
                  {dayjs(discussion.created_at).fromNow()}
                </span>
              </h3>
            </div>
            <div className="discussion-card-center">
              <p>{discussion.discussion}</p>
            </div>
          </div>
        </div>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="cardReplies-header">
            <Comment />
            <h3>Replies</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ReplyCard discussionId={discussion.id} userId={userId} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DiscussionCard;
