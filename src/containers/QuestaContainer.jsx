import React from 'react';
import { graphql } from 'react-apollo';

import { allQuestionsQuery } from '../graphql/team';
import '../styles/Home.css';
import QFeed from '../components/kofta/QFeed';
import WidgetsRow from '../components/kofta/WidgetRow';
import LeftSidebar from '../components/kofta/LetfSidebar';
import Loader from '../components/Loader';

function QuestaContainer({ username, userId, data: { loading, allQuestions } }) {
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className='app__body'>
        <LeftSidebar username={username} />
        <QFeed username={username} userId={userId} questions={allQuestions} />
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

export default graphql(allQuestionsQuery)(QuestaContainer);
