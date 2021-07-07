import React from 'react';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';

import '../styles/Home.css';
import Header from '../components/Header';
import QuestionSender from '../components/kofta/QuestionSender';

function Home() {
  return (
    <div>
      <Header />
      <div className='app__body'>
        <div className='trends'>Trends</div>
        <div className='center'>
          <div className='search'>
            {' '}
            <div className='search__input'>
              <SearchIcon />
              <input placeholder='Search questions and users' />
            </div>
          </div>
          <div className='asker'>
            <QuestionSender />
          </div>
          <div className='main'>Main</div>
        </div>
        <div className='widgets'>Widgets</div>
      </div>
    </div>
  );
}

export default Home;
