import React from 'react';
import { graphql } from 'react-apollo';

import { meQuery } from '../graphql/team';
import '../styles/Home.css';
import Header from '../components/Header';
import QuestaContainer from '../containers/QuestaContainer';

function Home({ data: { loading, me } }) {
  if (loading) {
    return null;
  }

  const { id: userId, username } = me;

  return (
    <div>
      <Header username={username} />
      <QuestaContainer userId={userId} username={username} />
    </div>
  );
}

export default graphql(meQuery)(Home);
