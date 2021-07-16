import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import '../styles/Home.css';
import Header from '../components/Header';
import QFeed from '../components/kofta/QFeed';
import WidgetsRow from '../components/kofta/WidgetRow';
import LeftSidebar from '../components/kofta/LetfSidebar';

function Home({ data: { loading, allQuestions } }) {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Header />
      <div className='app__body'>
        <LeftSidebar />
        <QFeed questions={allQuestions} />
        <div className='widgets'>
          <WidgetsRow
            title='Neox Chat'
            about='The iPhone 12 Pro and iPhone 12 Pro Max are smartphones designed and marketed by Apple Inc. They are the flagship smartphones in the fourteenth generation of the iPhone,'
          />
        </div>
      </div>
    </div>
  );
}

const allQuestionsQuery = gql`
  {
    allQuestions {
      id
      text
      user {
        username
        email
        id
      }
      created_at
    }
  }
`;

export default graphql(allQuestionsQuery)(Home);
