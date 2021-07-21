import React from 'react';
import { graphql } from 'react-apollo';

import { meQuery } from '../graphql/team';
import '../styles/Home.css';
import Header from '../components/Header';
import Feed from '../components/kebbah/Feed';
import AdsWidget from '../components/kebbah/AdsWidget';
import HeadBarBottom from '../components/kebbah/HeadBarBottom';
import Loader from '../components/Loader';

function Home({ data: { loading, me } }) {
  if (loading) {
    return <Loader />;
  }

  const { id: userId, username } = me;

  return (
    <div>
      <Header username={username} />
      <div className='homepage_layout'>
        <div className='left-layout-header'>
          <HeadBarBottom />
        </div>
        <div className='left-layout'>
          <Feed />
        </div>
        <div className='right-layout'>
          <AdsWidget />
        </div>
      </div>
    </div>
  );
}

export default graphql(meQuery)(Home);
