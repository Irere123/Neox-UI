import React from 'react';
import moment from 'moment';
import gql from 'graphql-tag';
import { Avatar } from '@material-ui/core';
import { graphql } from 'react-apollo';

import Loader from '../Loader';

const Comments = ({ data: { loading, allComments } }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {allComments.map((c) => (
        <div className='comment-card'>
          <Avatar>UG</Avatar>
          <div className='comment-card-details'>
            <h3>{c.user.username}</h3>
            <h4>On {moment(c.created_at).format('MMMM DD YYYY HH:mm')}</h4>
            <p>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const allCommentsQuery = gql`
  query ($questionId: Int!) {
    allComments(questionId: $questionId) {
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

export default graphql(allCommentsQuery, {
  options: (props) => ({
    variables: {
      questionId: 6,
    },
    fetchPolicy: 'network-only',
  }),
})(Comments);
