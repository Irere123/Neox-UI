import React from 'react';
import moment from 'moment';

import { Avatar, Container } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Question = ({ question }) => {
  return (
    <Container>
      <div className='comments-card'>
        <div className='comments-card-top'>
          <Link to='/home'>
            <div className='close-icon'>
              <ArrowBack />
            </div>
          </Link>

          <div className='question-card'>
            <Avatar>{question.user.username.charAt(0).toUpperCase()}</Avatar>
            <div className='question-card-details'>
              <h3>{question.user.username} asked</h3>
              <h4>On {moment(question.created_at).format('MMMM DD YYYY HH:mm')}</h4>
              <p>{question.text}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Question;
