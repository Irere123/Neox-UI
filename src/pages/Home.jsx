import React from 'react';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';

import '../styles/Home.css';
import Header from '../components/Header';
import QuestionSender from '../components/kofta/QuestionSender';
import Feed from '../components/kofta/Feed';

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
              <input placeholder='Search Questions and Answers' />
            </div>
          </div>
          <div className='asker'>
            <QuestionSender />
          </div>
          <div className='main'>
            <Feed />
          </div>
        </div>
        <div className='widgets'>Widgets</div>
      </div>
    </div>
  );
}

export default Home;
