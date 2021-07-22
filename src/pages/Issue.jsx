import React from 'react';

import Header from '../components/Header';
import IssueContainer from '../containers/IssueContainer';
import '../styles/Issue.css';

function Issue() {
  return (
    <div>
      <Header />
      <div className='issue-layout'>
        <IssueContainer />
      </div>
    </div>
  );
}

export default Issue;
