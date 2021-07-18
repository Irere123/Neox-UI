import React from 'react';

import '../styles/Home.css';
import QFeed from '../components/kofta/QFeed';
import WidgetsRow from '../components/kofta/WidgetRow';
import LeftSidebar from '../components/kofta/LetfSidebar';

function QuestaContainer({ username, userId }) {
  return (
    <div>
      <div className='app__body'>
        <LeftSidebar username={username} />
        <QFeed username={username} userId={userId} />
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

export default QuestaContainer;
