import React from 'react';
import { graphql } from 'react-apollo';

import { meQuery } from '../graphql/team';
import Header from '../components/Header';
import OneQuestion from '../containers/OneQuestion';
import '../styles/kofta/ViewQuestion.css';
import Loader from '../components/Loader';
import { Hidden } from '@material-ui/core';

const ViewQuestion = ({ data: { loading, me }, match: { params: questionId } }) => {
  if (loading) {
    return <Loader />;
  }

  const { id } = me;

  return (
    <div style={{ overflowY: Hidden }}>
      <OneQuestion userId={id} questionId={questionId} />
    </div>
  );
};

export default graphql(meQuery)(ViewQuestion);
