import React from 'react';
import { graphql } from 'react-apollo';

import { allQuestionsQuery } from '../../graphql/team';
import '../../styles/kofta/Feed.css';
import Post from './Post';

function Feed({ data: { loading, allQuestions } }) {
  if (loading) {
    return null;
  }

  return (
    <div className='feed'>
      <Post questions={allQuestions} />
    </div>
  );
}

export default graphql(allQuestionsQuery)(Feed);
