import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';

import '../styles/Home.css';
import Header from '../components/Header';
import QuestionSender from '../components/kofta/QuestionSender';
import Feed from '../components/kofta/Feed';
import SidebarRow from '../components/kofta/SidebarRow';
import WidgetsRow from '../components/kofta/WidgetRow';

function Home() {
  return (
    <div>
      <Header />
      <div className='app__body'>
        <div className='trends'>
          <Link to='/profile'>
            <SidebarRow title='Tim Barners Lee' />
          </Link>
          <h3>People</h3>
          <SidebarRow title='Ben Awad' />
          <SidebarRow title='Denis Ivy' />
          <SidebarRow title='Neox Bot' />
          <SidebarRow title='Brad Traversy' />
          <SidebarRow title='Irere Emmanuel' />
        </div>
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
        <div className='widgets'>
          <WidgetsRow
            title='Iphone 12 Pro'
            about='The iPhone 12 Pro and iPhone 12 Pro Max are smartphones designed and marketed by Apple Inc. They are the flagship smartphones in the fourteenth generation of the iPhone,'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
