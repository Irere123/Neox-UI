import React from 'react';
import { graphql } from 'react-apollo';

import { meQuery } from '../graphql/team';
import Header from '../components/Header';
import Question from '../components/kofta/Question';
import '../styles/kofta/ViewQuestion.css';
import Loader from '../components/Loader';

const ViewQuestion = ({ data: { loading, me }, match: { params: questionId } }) => {
  if (loading) {
    return <Loader />;
  }

  const { id } = me;
  const { questionId: qId } = questionId;
  return (
    <div>
      <Header />
      <Question userId={id} questionId={parseInt(qId, 10)} />
    </div>
  );
};

export default graphql(meQuery)(ViewQuestion);
