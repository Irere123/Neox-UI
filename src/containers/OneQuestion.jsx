import React from 'react';
import findIndex from 'lodash/findIndex';
import { graphql } from 'react-apollo';

import { meQuery, allQuestionsQuery } from '../graphql/team';
import Question from '../components/kofta/Question';
import Loader from '../components/Loader';

const OneQuestion = ({ userId, questionId, data: { loading, allQuestions } }) => {
  if (loading) {
    return <Loader />;
  }

  const { questionId: IdString } = questionId;

  console.log(allQuestions);

  const questionIdInteger = parseInt(IdString, 10);
  const questionIdx = questionIdInteger ? findIndex(allQuestions, ['id', questionIdInteger]) : 0;
  const question = questionIdx === -1 ? allQuestions[0] : allQuestions[questionIdx];

  return (
    <div>
      <Question userId={userId} question={question} />
    </div>
  );
};

export default graphql(allQuestionsQuery)(OneQuestion);
