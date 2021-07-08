import React from 'react';
import { SearchOutlined as SearchIcon } from '@material-ui/icons';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibaryIcon from '@material-ui/icons/VideoLibrary';

import '../styles/Home.css';
import logo from '../images/Pixel.jpg';
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
          <SidebarRow title='Tim Barners Lee' src={logo} />
          <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information center' />
          <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
          <SidebarRow Icon={PeopleIcon} title='Friends' />
          <SidebarRow Icon={ChatIcon} title='Messanger' />
          <SidebarRow Icon={StorefrontIcon} title='Malketplace' />
          <SidebarRow Icon={VideoLibaryIcon} title='Videos' />
          <SidebarRow Icon={ExpandMoreOutlined} title='Malketplace' />
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
