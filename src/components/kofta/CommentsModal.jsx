import React from 'react';
import moment from 'moment';
import gql from 'graphql-tag';
import { Close } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { graphql } from 'react-apollo';

import '../../styles/kofta/CommentsModal.css';
import CommentSender from './CommentSender';
import Comments from './Comments';

const CommentsModal = ({ question, onClose, data: { loading, getQuestion: q } }) => {
  if (loading) {
    return null;
  }

  console.log(question);

  return (
    <div className='comments-card'>
      <div className='comments-card-top'>
        <div className='close-icon' onClick={onClose}>
          <Close />
        </div>
        <div className='question-card'>
          <Avatar>BO</Avatar>
          <div className='question-card-details'>
            <h3>{q.user.username} asked</h3>
            <h4>On {moment(q.created_at).format('MMMM DD YYYY HH:mm')}</h4>
            <p>{q.text}</p>
          </div>
        </div>
      </div>
      <CommentSender />
      <div className='comments-card-bottom'>
        <Comments />
      </div>
    </div>
  );
};

const getQuestionQuery = gql`
  query ($questionId: Int!) {
    getQuestion(questionId: $questionId) {
      id
      text
      user {
        id
        username
      }
      created_at
    }
  }
`;

export default graphql(getQuestionQuery, {
  options: (props) => ({
    variables: {
      questionId: 6,
    },
    fetchPolicy: 'network-only',
  }),
})(CommentsModal);
