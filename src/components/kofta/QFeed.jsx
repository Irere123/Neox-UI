import React from 'react';
import { SearchOutlined } from '@material-ui/icons';

import QuestionSender from './QuestionSender';
import Feed from './Feed';

const QFeed = ({ questions }) => {
  return (
    <div className='center'>
      <div className='search'>
        <div className='search__input'>
          <SearchOutlined />
          <input placeholder='Search Questions and Answers' />
        </div>
      </div>
      <div className='asker'>
        <QuestionSender />
      </div>
      <div className='main'>
        <Feed questions={questions} />
      </div>
    </div>
  );
};

export default QFeed;
