import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';

import { Avatar } from '@material-ui/core';
import Loader from '../Loader';

function Feed({ data: { loading, allIssues } }) {
  if (loading) {
    return <Loader />;
  }

  if (!allIssues.length) {
    return (
      <div className='issue-cards-home'>
        <h1 style={{ color: '#d3d3d3', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          There are no issues to solve🔍 yet...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className='issue-cards-home'>
        {allIssues.map((i) => (
          <div className='issue-card'>
            <div className='issue-card-header'>
              <Avatar>
                {i.user.username.charAt(0).toUpperCase()}
                {i.user.username.charAt(Math.floor(i.user.username.length / 3)).toUpperCase()}
              </Avatar>
              <div className='issue-card-info' style={{ marginLeft: '5px' }}>
                <h2>{i.user.username}</h2>
                <h4>{moment(i.created_at).fromNow()}</h4>
              </div>
            </div>
            <Link to={`/issue/${i.id}`}>
              <div className='issue-card-content'>{i.description}</div>
            </Link>
            <div className='issue-card-bottom'>
              <div className='category-issue'>
                <span className='hashtag'>#</span>
                <h4>{i.category}</h4>
              </div>
              <Link to={`/view-team/${i.team.id}`}>
                <div className='home_team_list_item'>{i.team.name.charAt(0).toUpperCase()}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      ;
    </div>
  );
}

const allIssuesQuery = gql`
  query ($teamIds: [Int!]!) {
    allIssues(teamIds: $teamIds) {
      id
      description
      category
      team {
        id
        name
      }
      user {
        username
      }
      created_at
    }
  }
`;

export default graphql(allIssuesQuery, {
  options: ({ teams }) => ({
    variables: {
      teamIds: teams,
    },
    fetchPolicy: 'network-only',
  }),
})(Feed);
