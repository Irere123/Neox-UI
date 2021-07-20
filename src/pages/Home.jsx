import React from 'react';
import { graphql } from 'react-apollo';

import { meQuery } from '../graphql/team';
import '../styles/Home.css';
import Header from '../components/Header';
import Loader from '../components/Loader';

function Home({ data: { loading, me } }) {
  if (loading) {
    return <Loader />;
  }

  const { id: userId, username } = me;

  return (
    <div>
      <Header username={username} />
    </div>
  );
}

export default graphql(meQuery)(Home);
